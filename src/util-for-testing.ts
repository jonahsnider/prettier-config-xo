import assert from 'node:assert/strict';
import {type Options, format} from 'prettier';

/**
 * Test a config with Prettier
 * @param config - Config to check
 * @param good - A properly formatted script
 * @param bad - An improperly formatted version of the `good` script
 */
export async function configTest(config: Options, good: string, bad: string): Promise<void> {
	const pathedConfig = {...config, filepath: 'file.ts'};
	await assert.doesNotReject(async () => format('', pathedConfig), 'config is valid');
	assert.equal(await format(good, pathedConfig), good, "doesn't format when input is good");
	assert.equal(await format(bad, pathedConfig), good, 'formats when input is bad');
}
