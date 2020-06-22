import { expect } from 'chai';
import singularize from '../src/singularize';

describe('singularize', () => {
  it('removes the last "s" from a string', () => {
    expect(singularize('KillerParakeets')).to.equal('KillerParakeet');
  });
});
