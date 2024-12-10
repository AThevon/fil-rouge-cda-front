<template>
	<UButton size="xl" class="mt-20" @click="handleTest"
		>BOUTON TEST STRIPE</UButton
	>
</template>

<script lang="ts" setup>
	import { loadStripe } from '@stripe/stripe-js';

	const stripeKey = useRuntimeConfig().public.stripeKey;

	const handleTest = async () => {
		try {
			// Charge Stripe.js avec ta clé publique
			const stripe = await loadStripe(stripeKey); // Remplace par ta clé publique

			// Simulation d'une commande
			const orderId = 1; // ID d'une commande existante dans la base de données

			// Appelle ton backend pour créer une session Stripe Checkout
			const response: any = await fetching('/checkout', {
				method: 'POST',
				body: { orderId },
			});

			if (response && response.id) {
				console.log(response.id);
				// Redirection vers Stripe Checkout
				await stripe?.redirectToCheckout({ sessionId: response.id });
			} else {
				throw new Error('ID de session Stripe manquant');
			}
		} catch (error) {
			console.error('Erreur lors de la création de la session Stripe:', error);
		}
	};
</script>

<style></style>
