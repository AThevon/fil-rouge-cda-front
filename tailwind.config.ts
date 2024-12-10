import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'main': {
					'50': '#f0f9f3',
					'100': '#dbf0e0',
					'200': '#b9e1c5',
					'300': '#8bcaa1',
					'400': '#55aa76',
					'500': '#39905e',
					'600': '#287349',
					'700': '#205c3c',
					'800': '#1b4a31',
					'900': '#173d2a',
					'950': '#0c2218',
				},
				'second': {
					'50': '#f6f5f0',
					'100': '#e9e4d8',
					'200': '#d6c9b2',
					'300': '#bea986',
					'400': '#b39975',
					'500': '#9b7c57',
					'600': '#856549',
					'700': '#6b4e3d',
					'800': '#5b4338',
					'900': '#503b33',
					'950': '#2d1f1b',
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
