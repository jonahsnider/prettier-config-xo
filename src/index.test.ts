import test from 'ava';
import {base} from './configs/base.js';
import * as index from './index.js';

test('index', t => {
	t.is(index, base, 'index.ts exports the base config');
});
