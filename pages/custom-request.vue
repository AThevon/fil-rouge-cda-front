<template>
	<div class="flex items-center justify-center min-h-[80vh]">
		<div class="w-full max-w-lg">
			<h2 class="mb-4 text-2xl font-bold uppercase text-center">
				Demande personnalisée
			</h2>
			<UForm
				:schema="schema"
				:state="form"
				@submit="handleSubmit"
				class="space-y-4"
			>
				<UFormGroup label="Catégorie" name="category_id">
					<USelect
						id="category_id"
						v-model="form.category_id"
						:options="categories"
						option-attribute="name"
						value-attribute="id"
						size="lg"
						class="mt-1 w-full"
					/>
				</UFormGroup>

				<UFormGroup label="Message" name="message">
					<UTextarea
						id="message"
						v-model="form.message"
						placeholder="Décrivez votre demande"
						required
						size="lg"
						class="mt-1 w-full"
					/>
				</UFormGroup>

				<UFormGroup label="Télécharger des images" name="images">
					<input
						type="file"
						id="images"
						multiple
						accept="image/jpeg, image/jpg, image/png, image/webp"
						placeholder="Télécharger jusqu'à 5 images"
						class="mt-1 w-full"
						@change="handleFileChange"
					/>
				</UFormGroup>

				<UButton
					padded
					block
					type="submit"
					label="Envoyer"
					size="xl"
					class="group transition-all active:scale-[0.98]"
					:loading="isLoading"
				/>
			</UForm>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { z } from 'zod';
	import fetching from '@/utils/fetching';
	import type { Category } from '~/types';

	// Schéma de validation
	const schema = z.object({
		category_id: z.union([
			z.number(),
			z
				.string()
				.regex(/^\d+$/, 'La catégorie doit être un nombre.')
				.transform((val) => parseInt(val, 10)),
		]),
		message: z
			.string()
			.min(10, 'Le message doit contenir au moins 10 caractères.')
			.max(1000),
		images: z
			.array(z.instanceof(File))
			.max(5, 'Vous ne pouvez télécharger que 5 fichiers maximum.')
			.optional() // Permet à images d'être absent
			.or(z.array(z.any())) // Permet un tableau vide
			.refine(
				(files: File[] | undefined) =>
					files
						? files.every((file) =>
								['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(
									file.type,
								),
						  )
						: true,
				'Seuls les fichiers JPEG, JPG, PNG ou WEBP sont autorisés.',
			)
			.refine(
				(files: File[] | undefined) =>
					files ? files.every((file) => file.size <= 10 * 1024 * 1024) : true, // Limite à 10 MB
				'Chaque fichier doit faire moins de 10 Mo.',
			),
	});

	// État du formulaire
	const form = reactive<{
		category_id: number;
		message: string;
		images: File[];
	}>({
		category_id: 1,
		message: '',
		images: [],
	});

	const toast = useToast();

	// Récupération des catégories
	const categories = ref<Category[]>([]);
	const isLoading = ref(false);

	// Charger les catégories
	await fetching<Category[]>('/categories').then(
		(res: Category[]) => (categories.value = res),
	);

	const handleFileChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const files = target.files;

		if (files && files.length > 0) {
			form.images = Array.from(files);
		} else {
			form.images = []; // Vide si aucun fichier sélectionné
		}
	};

	// Soumission du formulaire
	const handleSubmit = async () => {
		isLoading.value = true;
		try {
			const formData = new FormData();

			// Ajouter les champs au FormData
			Object.entries(form).forEach(([key, value]) => {
				if (key === 'images' && Array.isArray(value)) {
					// Ajouter les fichiers images
					value.forEach((image) => formData.append('images[]', image));
				} else if (key === 'category_id') {
					// Convertir category_id en entier
					formData.append(key, String(parseInt(value as string, 10)));
				} else {
					formData.append(key, value as string);
				}
			});

			// Envoyer la requête au back-end
			await fetching('/custom-requests', {
				method: 'POST',
				body: formData,
			});

			// Afficher un message de succès
			toast.add({
				title: 'Demande envoyée',
				description: 'Votre demande personnalisée a été envoyée avec succès.',
				icon: 'i-octicon-check-24',
				color: 'green',
			});

			// Réinitialiser le formulaire
			form.message = '';
		} catch (error) {
			toast.add({
				title: 'Erreur',
				description: 'Une erreur est survenue lors de l’envoi de la demande.',
				icon: 'i-octicon-alert-24',
				color: 'red',
			});
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};
</script>
