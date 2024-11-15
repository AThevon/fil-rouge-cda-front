// middleware/initAuth.ts
import { useAuth } from '~/composables/useAuth';
export default defineNuxtRouteMiddleware(async () => {
	// const { fetchUser } = useAuth();
	// const userStore = useUserStore();
	// if (!userStore.isAuthenticated) {
	// 	try {
	// 		await fetchUser();
	// 	} catch (error) {
	// 		console.log('Utilisateur non connecté.');
	// 	}
	// }
});
