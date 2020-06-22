import { expect } from 'chai';
import camelCase from '../src/camel-case';

describe('camelCase', () => {
  it('converts uncleaned strings to camel case', () => {
    expect(
      camelCase('My Prop NAme!!')
    ).to.equal('myPropName');
  });
});
