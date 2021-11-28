import test from 'ava';
import {space as spaceConfig} from './configs/space';
import * as space from './space';

test('space', t => {
	t.is(space, spaceConfig, 'space.ts exports the base config');
});
