import { expect } from 'chai';
import transformKeys from '../src/transform-keys';

describe('transformKeys', () => {
  it('take an array of objects and sort into object keys by getter', () => {
    const transform = (k: string) => `Crazy_${k}`;
    
    const input = {
      normal: false,
      keys: false,
      are: false,
      cool: false,
    };
    
    const output = {
      Crazy_normal: false,
      Crazy_keys: false,
      Crazy_are: false,
      Crazy_cool: false,
    };
    
    expect(transformKeys(transform)(input)).to.eql(output);
  });
});
