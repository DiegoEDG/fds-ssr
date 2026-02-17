/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./homepage.html'],
	theme: {
		extend: {
			colors: {
				'primary-blue': '#0066cc',
				'primary-blue_dark': '#004a99',
				'primary-blue_light': '#a3c7ff',
				monochromes: {
					grey_xlight: '#e5e7eb'
				}
			}
		}
	},
	plugins: []
};
