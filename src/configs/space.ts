import {base} from './base';
import {Options} from 'prettier';

/**
 * Base XO config but uses spaces.
 */
export const space: Options = {...base, useTabs: false};
