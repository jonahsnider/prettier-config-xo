import test from 'ava';
import {base} from './configs/base';
import * as index from '.';

test('index', t => {
	t.is(index, base, 'index.ts exports the base config');
});
