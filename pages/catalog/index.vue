<template>
	<div class="container mx-auto p-4">
		<h1 class="text-2xl font-bold mb-4">Catalogue</h1>

		<!-- Chargement ou Erreur -->
		<div v-if="loading" class="text-center text-gray-500">Chargement...</div>
		<div v-else-if="error" class="text-center text-red-500">
			Erreur : {{ error.message }}
		</div>

		<!-- Boutons radio pour les catégories -->
		<div v-else>
			<div class="flex gap-4 mb-6">
				<label class="flex items-center gap-2 cursor-pointer">
					<input
						type="radio"
						value="all"
						v-model="selectedCategory"
						class="hidden peer"
					/>
					<span class="peer-checked:underline text-lg"> Tous </span>
				</label>

				<label
					v-for="category in categories"
					:key="category.id"
					class="flex items-center gap-2 cursor-pointer"
				>
					<input
						type="radio"
						:value="category.id"
						v-model="selectedCategory"
						class="hidden peer"
					/>
					<img
						:src="category.images[0]?.url"
						:alt="category.name"
						class="w-12 h-12 object-cover rounded-full border"
					/>
					<span class="peer-checked:underline text-lg">
						{{ category.name }}
					</span>
				</label>
			</div>

			<!-- Liste des produits -->
			<div
				v-if="filteredProducts.length"
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
			>
				<div
					v-for="product in filteredProducts"
					:key="product.id"
					class="p-4 border rounded-lg shadow hover:shadow-md"
				>
					<img
						:src="product.images[0]?.url"
						:alt="product.name"
						class="w-full h-48 object-cover rounded-lg mb-4"
					/>
					<h3 class="text-xl font-semibold">{{ product.name }}</h3>
					<p class="text-gray-600">{{ product.description }}</p>
					<p class="text-green-500 font-bold">{{ product.price }} €</p>
					<NuxtLink
						:to="`/catalog/${product.id}`"
						class="block text-blue-500 mt-4"
					>
						Voir le produit
					</NuxtLink>
				</div>
			</div>

			<!-- Aucun produit trouvé -->
			<p v-else class="text-center text-gray-500">
				Aucun produit trouvé pour cette catégorie.
			</p>
		</div>
		<UButton size="xl" class="mt-20" @click="handleTest"
			>BOUTON TEST STRIPE</UButton
		>
	</div>
</template>

<script setup lang="ts">
	import { useProductStore } from '~/stores/products';
	import { storeToRefs } from 'pinia';
	import { loadStripe } from '@stripe/stripe-js';

	const productStore = useProductStore();
	await Promise.all([
		productStore.fetchProducts(),
		productStore.fetchCategories(),
	]);

	const { filteredProducts, categories, error, loading, selectedCategory } =
		storeToRefs(productStore);

	const stripeKey = useRuntimeConfig().public.stripeKey;

	const handleTest = async () => {
		try {
			// Charge Stripe.js avec ta clé publique
			const stripe = await loadStripe(stripeKey); // Remplace par ta clé publique

			// Simulation d'une commande
			const orderId = 1; // ID d'une commande existante dans la base de données
			const amount = 59999; // Prix du produit en euros

			// Appelle ton backend pour créer une session Stripe Checkout
			const response: any = await fetching('/checkout', {
				method: 'POST',
				body: { orderId, amount },
			});

			if (response && response.id) {
            console.log(response.id)
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
