import assert from 'node:assert/strict';
import {type Options, format} from 'prettier';

/**
 Test a config with Prettier
 @param config - Config to check
 @param good - A properly formatted script
 @param bad - An improperly formatted version of the `good` script
 */
export function configTest(config: Options, good: string, bad: string): () => Promise<void> {
	return async () => {
		const pathedConfig = {...config, filepath: 'file.ts'};
		await format('', pathedConfig);
		assert.equal(await format(good, pathedConfig), good, "doesn't format when input is good");
		assert.equal(await format(bad, pathedConfig), good, 'formats when input is bad');
	};
}
