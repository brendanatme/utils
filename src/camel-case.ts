/**
 * camelCase
 */
import handleize from './handleize';

export default (str: string): string => handleize(str).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
