import test from 'ava';
import {configTest} from '../util-for-testing';
import {space} from './space';

const good: string = [`if (true) {`, `  console.log('hello');`, `} else {`, `  console.log('world');`, `}`, ''].join('\n');
const bad: string = [`if (true) {`, `\tconsole.log('hello')`, `} else {`, `\tconsole.log("world")`, `}`].join('\n');

test('space', async t => {
	t.plan(3);
	await configTest(space, good, bad, t);
});
