/**
 * mapArrayToObject
 * 
 * accepts an array of objects
 * and maps each object to a key,
 * specified by param "key"
 */
export default (
  key: string
): (
  arr: { [k: string]: any; }[]
) => { [k: string]: any; } => (
  arr: { [k: string]: any; }[]
) => {
  const output: { [k: string]: any; } = {};

  arr.map((item) => {
    output[item[key]] = item;
  });

  return output;
};
