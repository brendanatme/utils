/**
 * doOnce
 * 
 * wrap a function so it is only called once
 * 
 * @param cb function to call once
 * @returns function
 */
export default (cb: (...params: any[]) => any) => {
  let called: boolean = false;
  let output: any;

  return (...args: any[]) => {
    if (!called) {
      called = true;
      output = cb(...args);
    }

    return output;
  };
};
