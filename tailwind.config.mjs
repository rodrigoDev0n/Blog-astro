/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'50': '#f6f7f9',
				'100': '#eceef2',
				'200': '#d5dbe2',
				'300': '#b0bac9',
				'400': '#8695aa',
				'500': '#677890',
				'600': '#526177',
				'700': '#434e61',
				'800': '#3a4452',
				'900': '#343a46',
				'950': '#21252d',
			}
		},
	},
	plugins: [],
}
