import { expect } from 'chai';
import classCase from '../src/class-case';

describe('classCase', () => {
  it('converts slugs to class case', () => {
    expect(
      classCase('my-component-class')
    ).to.equal('MyComponentClass');
  });
});
