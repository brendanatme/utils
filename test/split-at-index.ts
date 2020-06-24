import { expect } from 'chai';
import splitAtIndex from '../src/split-at-index';

describe('splitAtIndex', () => {
  it('splits strings in two at specified index', () => {
    const input = 'foobar';
    const output = ['foo', 'bar'];
    
    expect(splitAtIndex(input, 3)).to.eql(output);
  });
});
