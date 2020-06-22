/**
 * mapStringToObject
 * 
 * generate a function for splitting a string into object key-value pairs
 *  
 * @param pairDelim the delimiter in the string separating the pairs
 * @param valDelim the delimiter in the string separating keys from values
 * @return <(str: string) => { [k: string]: string; }>
 */
export default (
  pairDelim: string = ',',
  valDelim: string = ':',
): (
  str: string
) => { [k: string]: string; } => (
  str: string
): { [k: string]: string; } => {
  const output: { [k: string]: string; } = {};

  str.split(pairDelim).map((s: string) => {
    const [key, value] = s.split(valDelim);
  
    output[key] = value;
  
    return key;
  });

  return output;
};
