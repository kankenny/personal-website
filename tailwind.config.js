/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['Sofia Sans', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
		},
		screens: {
			xs: '320px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				main: '#581C87',
				secondary: '#C084FC',
				gray: '#64748B',
				darkGray: '#18181B',
			},
			rotate: {
				360: '360deg',
			},
		},
	},
	plugins: [],
}
