import assert from 'node:assert/strict';
import {test} from 'node:test';
import {space as spaceConfig} from './configs/space.ts';
import space from './space.ts';

await test('space', () => {
	assert.equal(space, spaceConfig, 'space.ts exports the base config');
});
