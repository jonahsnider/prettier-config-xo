import type {Options} from 'prettier';
import {base} from './base';

/**
 * Base XO config but uses spaces.
 */
export const space: Options = {...base, useTabs: false};
