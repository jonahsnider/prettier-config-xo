import test, {ExecutionContext} from 'ava';
import {base} from './configs/base';
import * as index from './index';

test('index', (t: ExecutionContext) => {
	t.is(index, base, 'index.ts exports the base config');
});
