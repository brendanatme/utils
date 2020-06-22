/**
 * classCase
 * 
 * convert a string to class case
 */
import camelCase from './camel-case';
import capitalize from './capitalize';

export default (str: string): string => capitalize(camelCase(str));
