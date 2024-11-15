<template>
	<div>
		<h1>Catalogue</h1>
		<div v-if="loading">Chargement...</div>
		<div v-else-if="error">Erreur : {{ error.message }}</div>
		<ul v-else>
			<li v-for="product in products" :key="product.id">
				<NuxtLink :to="`/catalog/${product.id}`">{{ product.name }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { useProductStore } from '~/stores/products';
	import { storeToRefs } from 'pinia';

	const productStore = useProductStore();

	if (!productStore.products.length) {
		await productStore.fetchProducts();
	}

	const { products, loading, error } = storeToRefs(productStore);
</script>
