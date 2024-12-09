export default async function fetching (url: string, options: any = {}) {
	const token = useCookie('XSRF-TOKEN').value || '';
	const baseUrl = useRuntimeConfig().public.sanctum.baseUrl;

	options.headers = {
		...options.headers,
		'X-XSRF-TOKEN': token,
	};
	options.credentials = 'include';
	return await $fetch(`${baseUrl}/api${url}`, options);
}
