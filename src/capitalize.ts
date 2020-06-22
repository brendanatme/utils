/**
 * capitalize
 * 
 * capitalizes first character
 * in each word of string
 * 
 * ripped from
 * https://stackoverflow.com/questions/2332811/capitalize-words-in-string
 */
export default (str: string): string => str.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
