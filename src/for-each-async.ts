/**
 * for-each-async
 * 
 * iterate over an array, using the provided async callback method,
 * but run each execution in succession
 */
export default <T>(a: T[], cb: (n: T) => Promise<any>): Promise<any> =>
  a.reduce((promise, n) => promise.then(() => cb(n)), Promise.resolve());