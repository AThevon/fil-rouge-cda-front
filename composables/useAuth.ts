import { useUserStore } from '~/stores/user';
import type { User } from '~/types';

type LoginCredentials = {
	email: string;
	password: string;
};

export const useAuth = () => {
	const backendUrl = useRuntimeConfig().public.backendUrl;
	const userStore = useUserStore();

	const getCsrfToken = async () => {
		await $fetch(`${backendUrl}/sanctum/csrf-cookie`, {
			method: 'GET',
			credentials: 'include',
		});
	};

	const login = async (credentials: LoginCredentials) => {
		await getCsrfToken();

		const xsrfToken = useCookie('XSRF-TOKEN').value as string;

		const response = await $fetch<{ user: User }>(`${backendUrl}/login`, {
			method: 'POST',
			body: credentials,
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'X-XSRF-TOKEN': xsrfToken,
				// Inutile de récupérer le XSRF-TOKEN manuellement ici, car credentials: 'include' suffit.
			},
		});

		userStore.setUser(response.user);
	};

	const googleLogin = async () => {
		await getCsrfToken();
		window.location.href = `${backendUrl}/auth/google/redirect`;
	};

	const logout = async () => {
		const xsrfToken = useCookie('XSRF-TOKEN').value as string;

		await $fetch(`${backendUrl}/logout`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'X-XSRF-TOKEN': xsrfToken,
			},
		});

		// Récupérer un nouveau token CSRF après déconnexion pour les futures requêtes sécurisées.
		await getCsrfToken();

		navigateTo('/');

		userStore.clearUser();
	};

	const fetchUser = async () => {
		try {
			const { data } = await useApiFetch<User>('/user');
			if (data.value) {
				userStore.setUser(data.value);
			}
		} catch (error) {
			userStore.clearUser();
		}
	};

	return { login, googleLogin, logout, fetchUser };
};
