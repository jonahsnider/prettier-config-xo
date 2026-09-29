import type {FlatXoConfig} from 'xo';

const xoConfig: FlatXoConfig = [
	{
		prettier: 'compat',
	},
	{
		files: ['package.json'],
		rules: {
			// Zshy doesn't let us do this
			'package-json/prefer-exports': 'off',
		},
	},
];

export default xoConfig;
