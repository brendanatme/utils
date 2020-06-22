/**
 * transform-keys
 */
export default (
  trans: (k: string) => string,
): (
  input: { [k: string]: any; },
) => { [k: string]: any; } => (
  input: { [k: string]: any; },
): { [k: string]: any; } => {
  const output: { [k: string]: any; } = {};

  Object.keys(input).map((k) => {
    output[trans(k)] = input[k];
    return null;
  })

  return output;
}
