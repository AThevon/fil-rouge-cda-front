<template>
	<div class="flex items-center justify-center min-h-[80vh]">
		<div class="w-full max-w-sm">
			<h1 class="text-2xl font-semibold text-center mb-6">Créer un compte</h1>
			<UForm
				:schema="schema"
				:state="form"
				@submit="handleSubmit"
				class="space-y-4"
			>
				<UFormGroup label="Nom" name="name">
					<UInput
						id="name"
						v-model="form.name"
						placeholder="Votre nom"
						required
						size="lg"
						class="mt-1 w-full"
					/>
				</UFormGroup>

				<UFormGroup label="Email" name="email">
					<UInput
						id="email"
						v-model="form.email"
						type="email"
						placeholder="Votre email"
						required
						size="lg"
						class="mt-1 w-full"
					/>
				</UFormGroup>

				<UFormGroup label="Mot de passe" name="password">
					<UInput
						id="password"
						v-model="form.password"
						type="password"
						placeholder="Votre mot de passe"
						required
						size="lg"
						class="mt-1 w-full"
					/>
				</UFormGroup>

				<UFormGroup
					label="Confirmez le mot de passe"
					name="password_confirmation"
				>
					<UInput
						id="password_confirmation"
						v-model="form.password_confirmation"
						type="password"
						placeholder="Confirmez votre mot de passe"
						required
						size="lg"
						class="mt-1 w-full"
					/>
				</UFormGroup>

				<UButton
					padded
					block
					type="submit"
					label="S'inscrire"
					size="xl"
					class="group transition-all active:scale-[0.98]"
				>
					<template #trailing>
						<UIcon
							name="i-heroicons-arrow-right-20-solid"
							class="transition-all h-5 w-0 group-hover:w-5"
						/>
					</template>
				</UButton>
			</UForm>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { z } from 'zod';
	import fetching from '@/utils/fetching';

	// Définir le schéma de validation avec zod
	const schema = z
		.object({
			name: z.string().min(1, 'Le nom est requis.'),
			email: z.string().email('Veuillez entrer un email valide.'),
			password: z
				.string()
				.min(8, 'Le mot de passe doit contenir au moins 8 caractères.'),
			password_confirmation: z.string(),
		})
		.superRefine((data, ctx) => {
			if (data.password !== data.password_confirmation) {
				ctx.addIssue({
					path: ['password_confirmation'],
					message: 'Les mots de passe ne correspondent pas.',
					code: z.ZodIssueCode.custom,
				});
			}
		});

	// État du formulaire
	const form = reactive({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	});

	const router = useRouter();
	const toast = useToast();

	// Soumission du formulaire
	const handleSubmit = async () => {
		try {
			await fetching('/register', {
				method: 'POST',
				body: form,
			});
			toast.add({
				title: 'Inscription réussie',
				description: 'Votre compte a été créé avec succès.',
				icon: 'i-octicon-desktop-download-24',
				color: 'green',
			});
			router.push('/login');
		} catch (error) {
			toast.add({
				title: 'Erreur lors de l’inscription',
				description: 'Veuillez vérifier vos informations et réessayer.',
				icon: 'i-octicon-alert-24',
				color: 'red',
			});
			console.error(error);
		}
	};
</script>
