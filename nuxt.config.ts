export default defineNuxtConfig({
	compatibilityDate: '2024-11-10',
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxt/fonts',
		'@pinia/nuxt',
		'nuxt-auth-sanctum',
	],
	sanctum: {
		mode: 'cookie',
		userStateKey: 'sanctum.user.identity',
		redirectIfAuthenticated: false,
		redirectIfUnauthenticated: false,
		endpoints: {
			csrf: '/sanctum/csrf-cookie',
			login: '/login',
			logout: '/logout',
			user: '/api/user',
		},
		csrf: {
			cookie: 'XSRF-TOKEN',
			header: 'X-XSRF-TOKEN',
		},
		client: {
			retry: true,
			initialRequest: true,
		},
		redirect: {
			keepRequestedRoute: false,
			onLogin: '/',
			onLogout: '/',
			onAuthOnly: '/login',
			onGuestOnly: '/',
		},
		globalMiddleware: {
			enabled: false,
			allow404WithoutAuth: true,
		},
		logLevel: 3,
		appendPlugin: false,
	},
	runtimeConfig: {
		public: {
			baseUrl: process.env.BASE_URL,
			sanctum: {
				baseUrl: process.env.BASE_URL || 'http://localhost:8000',
			},
		},
	},
	colorMode: {
		preference: 'light',
	},
	// fonts: {
	// 	google: {
	// 		families: ['Montserrat', 'New Amsterdam'],
	// 	},
	// },
	app: {
		pageTransition: {
			name: 'slide-fade-y',
			mode: 'out-in',
		},
	},
});
