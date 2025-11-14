import type {FlatXoConfig} from 'xo';

const xoConfig: FlatXoConfig = [
	{
		rules: {
			'ava/no-ignored-test-files': ['error', {extensions: ['ts']}],
		},
		prettier: 'compat',
	},
];

export default xoConfig;
