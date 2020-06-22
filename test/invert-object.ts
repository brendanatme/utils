import { expect } from 'chai';
import invertObject from '../src/invert-object';

describe('invertObject', () => {
  it('swaps key/value pairs of object', () => {
    expect(invertObject({ foo: 'bar' })).to.eql({ bar: 'foo' });
  });
});
