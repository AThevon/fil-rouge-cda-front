import { useUserStore } from '~/stores/user';
import type { User } from '~/types';

type LoginCredentials = {
	email: string;
	password: string;
};

export const useAuth = () => {
	const { $sanctum } = useNuxtApp() as any;
	const userStore = useUserStore();

	// Login avec email et mot de passe
	const login = async (credentials: LoginCredentials) => {
		await $sanctum.login(credentials);
		await fetchUser();
	};

	// Google Login
	const googleLogin = async () => {
		// Redirection vers Google OAuth (le module Sanctum s'occupe du reste)
		window.location.href = `${$sanctum.config.baseUrl}/auth/google/redirect`;
	};

	// Logout
	const logout = async () => {
		await $sanctum.logout();
		userStore.clearUser();
		navigateTo('/');
	};

	// Fetch user
	const fetchUser = async () => {
		try {
			const user = await $sanctum.user();
			if (user) {
				userStore.setUser(user as User);
			} else {
				userStore.clearUser();
			}
		} catch (error) {
			userStore.clearUser();
		}
	};

	return { login, googleLogin, logout, fetchUser };
};
