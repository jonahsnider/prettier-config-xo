import assert from 'node:assert/strict';
import {test} from 'node:test';
import {base} from './configs/base.ts';
import index from './index.ts';

await test('index', () => {
	assert.equal(index, base, 'index.ts exports the base config');
});
