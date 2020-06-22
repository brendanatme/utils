import { expect } from 'chai';
import capitalize from '../src/capitalize';

describe('capitalize', () => {
  it('capitalizes each word in string', () => {
    expect(
      capitalize(`in the beginner's mind there are many possibilities, but in the expert's there are few`)
    ).to.equal(
      `In The Beginner's Mind There Are Many Possibilities, But In The Expert's There Are Few`
    );
  });
});
