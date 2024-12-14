export default async function fetching<T>(url: string, options: any = {}): Promise<T> {
	const token = useCookie('XSRF-TOKEN').value || '';
	const baseUrl = useRuntimeConfig().public.sanctum.baseUrl;

	options.headers = {
		...options.headers,
		'X-XSRF-TOKEN': token,
	};
	options.credentials = 'include';

	return await $fetch<T>(`${baseUrl}/api${url}`, options);
}
