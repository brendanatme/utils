/**
 * singularize
 * 
 * takes a plural word and removes trailing 's'
 */
export default (str: string): string => str.replace(/s$/, '');
