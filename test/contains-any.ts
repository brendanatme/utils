import { expect } from 'chai';
import containsAny from '../src/contains-any';

describe('containsAny', () => {
  it('returns `true` when any needle is found in haystack', () => {
    expect(containsAny('pretty', 'dank')(['high', 'levels', 'of', 'dank'])).to.equal(true);
  });

  it('returns `false` when no needles are found in haystack', () => {
    expect(containsAny('country music', 'kewl')(['high', 'levels', 'of', 'dank'])).to.equal(false);
  });
});
