/**
 * split-at-index
 * 
 * split a string in two at specified index
 */
export default (
  val: string,
  i: number,
): string[] => `${val.substring(0, i)}~${val.substring(i)}`.split('~');
