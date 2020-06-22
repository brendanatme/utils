import { expect } from 'chai';
import mergeArrays from '../src/merge-arrays';

describe('mergeArrays', () => {
  it('flattens a multi-level array to one depth', () => {
    const arr1 = ['how'];
    const arr2 = ['are'];
    const arr3 = ['you', 'uuuu', '?'];
    const all = [arr1, arr2, arr3];
    
    expect(
      mergeArrays(...all)
    ).to.eql(
      [...arr1, ...arr2, ...arr3]
    );
  });
});
