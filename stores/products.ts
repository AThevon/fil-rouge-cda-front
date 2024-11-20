import { defineStore } from 'pinia';
import type { Product, Category } from '~/types';

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [] as Product[],
		categories: [] as Category[],
		loading: false,
		error: null as Error | null,
		selectedCategory: 'all' as string | number,
	}),
	getters: {
		filteredProducts: (state) => {
			if (state.selectedCategory === 'all') {
				return state.products;
			}
			return state.products.filter(
				(product) => product.category.id === state.selectedCategory,
			);
		},
	},
	actions: {
		async fetchProducts() {
			const { data, status, error } = await useFetch<Product[]>(
				`${useRuntimeConfig().public.baseUrl}/api/products`,
			);
			this.products = data.value ?? [];
			this.loading = status.value === 'pending';
			this.error = error ? error.value : null;
		},

		async fetchCategories() {
			const { data, status, error } = await useFetch<Category[]>(
				`${useRuntimeConfig().public.baseUrl}/api/categories`,
			);
			this.categories = data.value ?? [];
			this.loading = status.value === 'pending';
			this.error = error ? error.value : null;
		},

		getProductById(id: number) {
			return this.products.find((product) => product.id === id) || null;
		},
	},
});
