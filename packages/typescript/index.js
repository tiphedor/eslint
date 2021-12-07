module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [ 'error' ],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [ 'error' ],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.js', '.ts',
				],
			},
		},
	},
};
