import test, {ExecutionContext} from 'ava';
import {base} from './configs/base';
// eslint-disable-next-line import/namespace
import * as index from '.';

test('index', (t: ExecutionContext) => {
	t.is(index, base, 'index.ts exports the base config');
});
