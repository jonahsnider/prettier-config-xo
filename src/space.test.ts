import test from 'ava';
import {space as spaceConfig} from './configs/space.js';
import * as space from './space.js';

test('space', t => {
	t.is(space, spaceConfig, 'space.ts exports the base config');
});
