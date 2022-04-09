module.exports = {
	content: ['./src/**/*.{html,css,svelte}'],
	theme: {
		// extend: {
		// 	textColor: {
		// 		skin: {}
		// 	}
		// },
		// backgroundColor: {
		// 	skin: {
		// 		'blue-msg': 'var(--sender-msg-color',
		// 		'cream-msg': 'var(--receiver-msg-color'
		// 	}
		// }
	},
	plugins: [require('@tailwindcss/forms')]
};
