import test from 'ava';
import {configTest} from '../util-for-testing';
import {base} from './base';

const good: string = [`if (true) {`, `\tconsole.log('hello');`, `} else {`, `\tconsole.log('world');`, `}`, ''].join('\n');
const bad: string = [`if (true) {`, `  console.log('hello')`, `} else {`, `  console.log("world")`, `}`].join('\n');

test('base', async t => {
	t.plan(3);
	await configTest(base, good, bad, t);
});
