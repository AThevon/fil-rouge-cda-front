import { defineStore } from 'pinia';
import type { Product } from '~/types';
import { useApiFetch } from '~/composables/useApiFetch';

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [] as Product[],
		loading: false,
		error: null as Error | null,
	}),
	actions: {
		async fetchProducts() {
			this.loading = true;
			try {
				// Utiliser useApiFetch pour la requête
				const { data } = await useApiFetch<Product[]>('/products');
				this.products = data.value ?? [];
			} catch (err) {
				this.error = err as Error;
			} finally {
				this.loading = false;
			}
		},
		getProductById(id: number) {
			return this.products.find((product) => product.id === id) || null;
		},
	},
});
