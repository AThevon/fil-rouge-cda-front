export default defineAppConfig({
	ui: {
		primary: 'main',
		secondary: 'second',
		gray: 'stone',
		button: {
			default: {
				color: 'primary',
            size: 'xl',
			},
			colors: {
				secondary: 'cyan', 
				danger: 'red',
			},
		},
		notifications: {
			position: 'top-[unset] bottom-0',
		},
	},
});
