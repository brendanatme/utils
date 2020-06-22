import { expect } from 'chai';
import mapStringToObject from '../src/map-string-to-object';

describe('mapStringToObject', () => {
  it('converts a formatted string into object key/value pairs', () => {
    const input = 'keyA:valueA,key2:valueC,foo:bar';
    const output = { keyA: 'valueA', key2: 'valueC', foo: 'bar' };
    
    expect(mapStringToObject()(input)).to.eql(output);
  });
});
