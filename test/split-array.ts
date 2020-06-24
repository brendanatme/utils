import { expect } from 'chai';
import splitArray from '../src/split-array';

describe('splitArray', () => {
  it('takes an array of objects and sorts into object keys by getter', () => {
    const input = [
      { category: 'Blog', name: 'Post 1' },
      { category: 'Blog', name: 'Post 2' },
      { category: 'Products', name: 'Product 1' },
      { category: 'Products', name: 'Product 2' },
    ];
    const output = {
      Blog: [
        { category: 'Blog', name: 'Post 1' },
        { category: 'Blog', name: 'Post 2' },
      ],
      Products: [
        { category: 'Products', name: 'Product 1' },
        { category: 'Products', name: 'Product 2' },
      ],
    };
    
    expect(splitArray((item) => item.category)(input)).to.eql(output);
  });
});
