import type {ExecutionContext} from 'ava';
import type {Options} from 'prettier';
import {format} from 'prettier';

/**
 * Test a config with Prettier
 * @param config - Config to check
 * @param good - A properly formatted script
 * @param bad - An improperly formatted version of the `good` script
 * @param t - AVA execution context
 */
export async function configTest(config: Options, good: string, bad: string, t: ExecutionContext): Promise<void> {
	const pathedConfig = {...config, filepath: 'file.ts'};
	t.notThrows(async () => format('', pathedConfig), 'config is valid');
	t.is(await format(good, pathedConfig), good, "doesn't format when input is good");
	t.is(await format(bad, pathedConfig), good, 'formats when input is bad');
}
