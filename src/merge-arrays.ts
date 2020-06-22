/**
 * mergeArrays
 * 
 * merge any number of nested arrays into one
 * (similar to Array.flat depth=1)
 */
export default (...args: any[][]) => args.reduce((acc, val) => [...acc, ...val]);
