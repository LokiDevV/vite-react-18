module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		indent: ['error', 'tab'],
		'prettier/prettier': [2, { useTabs: true }],
		'no-var': 'error',
		'@typescript-eslint/no-unused-vars': ['error'],
		// 'no-useless-path-segments': ['error'],
		'no-dupe-keys': ['error'],
		'no-use-before-define': ['error'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
