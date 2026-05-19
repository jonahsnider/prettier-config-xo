import {test} from 'node:test';
import {configTest} from '../util-for-testing.ts';
import {space} from './space.ts';

const good: string = ['if (true) {', "  console.log('hello');", '} else {', "  console.log('world');", '}', ''].join('\n');
const bad: string = ['if (true) {', "\tconsole.log('hello')", '} else {', '\tconsole.log("world")', '}'].join('\n');

await test('space', async () => {
	await configTest(space, good, bad);
});
