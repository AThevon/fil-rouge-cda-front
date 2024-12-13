<template>
	<div class="flex items-center justify-center min-h-[80vh]">
		<div class="w-full max-w-md">
			<h2 class="mb-4 text-2xl font-bold uppercase text-center">
				Contactez-nous
			</h2>
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

				<UFormGroup label="Message" name="message">
					<UTextarea
						id="message"
						v-model="form.message"
						placeholder="Votre message"
						required
						size="lg"
						class="mt-1 w-full"
					/>
				</UFormGroup>

				<UButton
					padded
					block
					type="submit"
					label="Envoyer"
					size="xl"
					class="group transition-all active:scale-[0.98]"
				/>
			</UForm>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { z } from 'zod';
	import fetching from '@/utils/fetching';
	import type { User } from '~/types';

	const user = useSanctumUser<{ user: User }>().value?.user;
	const toast = useToast();

	// Schéma de validation
	const schema = z.object({
		name: z.string().min(1, 'Le nom est requis.'),
		email: z.string().email('Veuillez entrer un email valide.'),
		message: z
			.string()
			.min(10, 'Le message doit contenir au moins 10 caractères.'),
	});

	// État du formulaire
	const form = reactive({
		name: user?.name ?? '',
		email: user?.email ?? '',
		message: '',
	});

	// Soumission du formulaire
	const handleSubmit = async () => {
		try {
			await fetching('/contact', {
				method: 'POST',
				body: form,
			});

			toast.add({
				title: 'Message envoyé',
				description: 'Votre message a été envoyé avec succès.',
				icon: 'i-octicon-check-24',
				color: 'green',
			});

			// Réinitialisation du formulaire
			form.name = '';
			form.email = '';
			form.message = '';
		} catch (error) {
			toast.add({
				title: 'Erreur',
				description: 'Une erreur est survenue lors de l’envoi.',
				icon: 'i-octicon-alert-24',
				color: 'red',
			});
		}
	};
</script>
