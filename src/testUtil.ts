import {ExecutionContext} from 'ava';
import {format, Options} from 'prettier';

/**
 * Test a config with Prettier
 * @param config Config to check
 * @param good A properly formatted script
 * @param bad An improperly formatted version of the `good` script
 * @param t AVA execution context
 */
export function configTest(config: Options, good: string, bad: string, t: ExecutionContext): void {
	const pathedConfig = {...config, filepath: 'file.ts'};
	t.notThrows(() => format('', pathedConfig), 'config is valid');
	t.is(format(good, pathedConfig), good, "doesn't format when input is good");
	t.is(format(bad, pathedConfig), good, 'formats when input is bad');
}
