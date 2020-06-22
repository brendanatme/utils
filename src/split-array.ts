/**
 * splitArray
 *
 * take an array, and split into an object containing multiple arrays
 * at different keys
 * where the key is return from the provided "getter" function argument
 *
 * @param {<(item) => string>} getter
 * @returns {<(Item[]) => ({ [key: string]: Item[] })>}
 */
export default (
  getter: (p: any) => string
): (
  items: { [k: string]: any }[]
) => { [k: string]: { [k: string]: any }[]} => (
  items: { [k: string]: any }[]
): { [k: string]: { [k: string]: any }[]} => {
  const output: { [k: string]: { [k: string]: any }[]} = {};

  items.map((item) => {
    const val: string = getter(item);

    if (!val) {
      return null;
    }

    if (!output[val]) {
      output[val] = [];
    }

    output[val].push(item);

    return null;
  })

  return output;
}
