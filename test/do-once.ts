import { expect } from 'chai';
import doOnce from '../src/do-once';

describe('doOnce', () => {
  it('suppresses each subsequent firing of a function after the first', () => {
    let i = 0;
    const cb = () => { i++; };
    const once = doOnce(cb);

    [1, 2, 3].map((_i) => once(_i));

    expect(i).to.equal(1);
  });

  it('passes arguments to callback function', () => {
    let i = 0;
    const cb = (n: any) => { i = i + n; };
    const once = doOnce(cb);

    [1, 2, 3].map((_i) => once(_i));

    expect(i).to.equal(1);
  });

  it('can accept 0 arguments', () => {
    let i = 0;
    const cb = () => { i++; };
    const once = doOnce(cb);

    [1, 2, 3].map((_i) => once());

    expect(i).to.equal(1);
  });

  it('returns initial return value', () => {
    let i = 0;
    const cb = () => { i++; return i; };
    const once = doOnce(cb);

    [1, 2, 3].map((_i) => once());

    expect(once()).to.equal(1);
  });
});
