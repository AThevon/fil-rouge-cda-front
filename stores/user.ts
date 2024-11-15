import { defineStore } from 'pinia';
import type { User } from '~/types';

export const useUserStore = defineStore('userStore', {
	state: () => ({
		user: null as User | null,
		isAuthenticated: false,
	}),
	actions: {
		setUser(user: User) {
			this.user = user;
			this.isAuthenticated = true;
		},
		clearUser() {
			this.user = null;
			this.isAuthenticated = false;
		},
	},
});
