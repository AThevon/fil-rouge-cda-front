// composables/useApiFetch.ts
export const useApiFetch = <T>(url: string, options: any = {}) => {
	const sanctum = useNuxtApp().$sanctum as any;
	const backendUrl = sanctum.config.baseUrl;

	// Appel automatique à $sanctum.getCsrfToken() pour s'assurer que le token CSRF est récupéré
	if (!options.skipCsrf) {
		sanctum.getCsrfToken();
	}

	// Définir les options par défaut
	options = {
		credentials: 'include', // Inclure les cookies pour les requêtes authentifiées
		headers: {
			Accept: 'application/json',
			...options.headers,
		},
		...options,
	};

	return useFetch<T>(`${backendUrl}/api${url}`, options);
};
