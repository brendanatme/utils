/**
 * contains any
 * 
 * check if an array contains any number of items
 */
import contains from './contains';

export default (...needles: any[]) => (haystack: any[]): boolean => {
  let output: boolean = false;

  needles.map((n) => {
    if (contains(n)(haystack)) {
      output = true;
    }

    return null;
  })

  return output;
};
