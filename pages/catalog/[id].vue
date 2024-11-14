<template>
	<div>
		<h1>Product Details</h1>
		<div v-if="!product">Produit introuvable...</div>
		<div v-else>
			<h2>{{ product.name }}</h2>
			<p>{{ product.description }}</p>
			<p>Prix : {{ product.price }} €</p>
			<p>Stock : {{ product.stock }}</p>
			<h3>Catégorie : {{ product.category.name }}</h3>
			<div v-if="product.category.images.length">
				<img
					v-for="(image, index) in product.category.images"
					:key="index"
					:src="image.url"
					:alt="product.category.name"
					width="100"
				/>
			</div>
			<h3>Images du produit</h3>
			<div v-if="product.images.length">
				<img
					v-for="(image, index) in product.images"
					:key="index"
					:src="image.url"
					:alt="product.name"
					width="100"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { useProductStore } from '~/stores/products';

	const $route = useRoute();
	const productId = Number($route.params.id);
	const productStore = useProductStore();

	const product = productStore.getProductById(productId);
</script>
