/**
 * contains
 * 
 * determine if needle is in haystack
 */
export default (needle: any): (haystack: any[]) => boolean => (haystack: any[]): boolean => haystack.indexOf(needle) !== -1;
