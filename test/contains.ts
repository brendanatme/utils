import { expect } from 'chai';
import contains from '../src/contains';

describe('contains', () => {
  it('returns `true` when needle is found in haystack', () => {
    expect(contains('dank')(['high', 'levels', 'of', 'dank'])).to.equal(true);
  });

  it('returns `false` when needle is not found in haystack', () => {
    expect(contains('country music')(['high', 'levels', 'of', 'dank'])).to.equal(false);
  });
});
