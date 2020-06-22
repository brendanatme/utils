import { expect } from 'chai';
import handleize from '../src/handleize';

describe('handleize', () => {
  it('handles non-word chars', () => {
    expect(handleize('no#_extra(chars*allowed')).to.equal('no--extra-chars-allowed');
  });

  it('handles uppercase chars', () => {
    expect(handleize('no-Ups-ALLOWED')).to.equal('no-ups-allowed');
  });

  it('handles whitespace chars', () => {
    expect(handleize('  no whitespace allowed     ')).to.equal('no-whitespace-allowed');
  });
});
