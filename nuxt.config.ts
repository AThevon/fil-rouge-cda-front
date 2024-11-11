export default defineNuxtConfig({
	compatibilityDate: '2024-11-10',
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts'],
	// runtimeConfig: {
	// 	AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
	// 	AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
	// 	AWS_REGION: process.env.AWS_REGION,
	// 	AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
	// 	public: {
	// 		AWS_REGION: process.env.AWS_REGION,
	// 	},
	// },
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
