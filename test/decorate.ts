import { expect } from 'chai';
import decorate from '../src/decorate';

describe('decorate', () => {
  const hocA = (C: any) => (n: any) => C(n * 2);
  const hocB = (C: any) => (n: any) => C(n * 3);
  const component = (n: any) => n;
  
  it('wraps component function in each argument function', () => {
    const decorated = decorate(hocA, hocB)(component);
    expect(decorated(1)).to.equal(6);
  });
});
