export default defineNuxtConfig({
	compatibilityDate: '2024-11-10',
	devtools: { enabled: true },
	tailwindcss: {
		cssPath: '~/assets/css/main.css',
	},
	modules: [
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxt/fonts',
		'nuxt-auth-sanctum',
		'@nuxtjs/tailwindcss',
		'dayjs-nuxt',
		'@pinia/nuxt',
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
			allow404WithoutAuth: false,
		},
		logLevel: 3,
		appendPlugin: false,
	},
	runtimeConfig: {
		public: {
			baseUrl: process.env.BASE_URL,
			contactEmail: process.env.CONTACT_EMAIL,
         stripeKey: process.env.STRIPE_KEY,
			sanctum: {
				baseUrl: process.env.BASE_URL || 'http://localhost:8000',
			},
		},
	},
	dayjs: {
		locales: ['fr', 'en'],
		defaultLocale: 'fr',
	},
	colorMode: {
		preference: 'light',
	},
	app: {
		pageTransition: {
			name: 'slide-fade-y',
			mode: 'out-in',
		},
	},
	fonts: {
		defaults: {
			weights: [400],
			styles: ['normal', 'italic'],
			subsets: [
				'cyrillic-ext',
				'cyrillic',
				'greek-ext',
				'greek',
				'vietnamese',
				'latin-ext',
				'latin',
			],
		},
	},
});
