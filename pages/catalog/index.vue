<template>
	<div class="container mx-auto p-4">
		<h2 class="text-4xl mb-6">Catalogue</h2>

		<!-- Tabs Navigation -->
		<div v-if="!loading && !error" class="mb-6 px-20">
			<UTabs :items="categoryTabs" v-model="selectedCategory" :ui="customUI">
				<template #default="{ item, selected }">
					<div
						class="flex items-center gap-4 !text-black dark:!text-white"
						:class="selected ? '!text-white' : ''"
					>
						<NuxtImg
							v-if="item.avatar.src"
							:src="item.avatar.src"
							:alt="item.avatar.alt"
							width="30"
							height="30"
						/>
                  <Layers v-else 
                  class="w-6 h-6"
                  :class="selected ? '!text-white' : ''"
                  />
						<p
							class="text-md !text-black dark:!text-white font-bold"
							:class="selected ? '!text-white' : ''"
						>
							{{ item.label }}
						</p>
					</div>
				</template>
			</UTabs>
		</div>

		<!-- Chargement ou Erreur -->
		<div v-if="loading" class="text-center text-gray-500">Chargement...</div>
		<div v-else-if="error" class="text-center text-red-500">
			Erreur : {{ error.message }}
		</div>

		<!-- Liste des produits -->
		<div
			v-else-if="filteredProducts.length"
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
		>
			<ProductCard
				v-for="product in filteredProducts"
				:key="product.id"
				:product="product"
			/>
		</div>

		<!-- Aucun produit trouvé -->
		<p v-else class="text-center text-gray-500">
			Aucun produit trouvé pour cette catégorie.
		</p>
	</div>
</template>

<script setup lang="ts">
	import { useProductStore } from '~/stores/products';
	import { storeToRefs } from 'pinia';
import { Layers } from 'lucide-vue-next';

	const productStore = useProductStore();
	await Promise.all([
		productStore.fetchProducts(),
		productStore.fetchCategories(),
	]);

	const { filteredProducts, categories, error, loading, selectedCategory } =
		storeToRefs(productStore);

	// Préparer les items pour Tabs
	const categoryTabs = computed(() => [
		{
			label: 'Tous',
			avatar: {
				src: '',
			},
			click: (): void => {
				selectedCategory.value = 0;
			},
		},
		...categories.value.map((category) => ({
			label: category.name,
			avatar: {
				src: category.images[0]?.url || 'https://via.placeholder.com/48',
				alt: category.name,
			},
			click: () => (selectedCategory.value = category.id),
		})),
	]);

	const customUI = {
		list: {
			height: 'h-16',
			padding: 'p-1',
			marker: {
				background: '!bg-main-600',
				color: 'text-white',
				rounded: 'rounded-md',
				shadow: 'shadow-sm',
			},
			tab: {
				height: 'h-full',
				color: '!text-white',
			},
		},
	};
</script>
