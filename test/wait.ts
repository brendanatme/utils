import { expect } from 'chai';
import wait from '../src/wait';

describe('wait', () => {
  it('pauses execution in an async function', async () => {
    const start = +new Date();

    await wait(1);

    const finish = +new Date();

    expect(finish - start).to.be.greaterThan(500);

    return;
  });
});
