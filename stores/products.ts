import { defineStore } from 'pinia';
import type { Product } from '~/types';

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [] as Product[],
		loading: false,
		error: null as Error | null,
	}),
	actions: {
		async fetchProducts(apiUrl: string) {
			this.loading = true;
			try {
				const { data } = await useFetch<Product[]>(`${apiUrl}/products`);
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
