/**
 * invertObject
 * 
 * swap key/value pairs of object
 */
export default (
  input: { [k: string]: any }
): { [k: string]: string } => {
  const output: { [k: string]: string } = {};

  Object.keys(input).map((key: string) => {
    const val = input[key];
    let normalized: string;

    switch (typeof val) {
      case "string": {
        normalized = val;
      }

      case "number": {
        normalized = `${val}`;
      }

      default: {
        normalized = `${val}`;
      }
    }

    output[normalized] = key;
  });

  return output;
};
