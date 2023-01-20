/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		fontFamily: {
			sans: ['Sofia Sans', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
		},
		extend: {},
	},
	plugins: [require('tw-elements/dist/plugin')],
}
