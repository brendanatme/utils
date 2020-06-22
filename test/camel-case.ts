import { expect } from 'chai';
import camelCase from '../src/camel-case';

describe('camelCase', () => {
  it('converts slugs to camel case', () => {
    expect(
      camelCase('my-prop-name')
    ).to.equal('myPropName');
  });
});
