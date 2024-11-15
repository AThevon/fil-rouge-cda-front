// composables/useApiFetch.ts
export const useApiFetch = <T>(url: string, options: any = {}) => {
	const backendUrl = useRuntimeConfig().public.backendUrl;
	const xsrfToken = useCookie('XSRF-TOKEN').value as string;

	// Définir les options par défaut
	options = {
		credentials: 'include',
		headers: {
			'X-XSRF-TOKEN': xsrfToken,
			Accept: 'application/json',
			...options.headers,
		},
		...options,
	};

	return useFetch<T>(`${backendUrl}/api${url}`, options);
};
