import { expect } from 'chai';
import forEachAsync from '../src/for-each-async';
import wait from '../src/wait';

describe('forEachAsync', () => {
  it('waits before executing each iteration', async () => {
    const start = +new Date();
    const arr = [0, 1, 2, 3, 4];

    await forEachAsync(arr, async () => await wait(0.25));

    const finish = +new Date();

    expect(finish - start).to.be.greaterThan(1000);

    return;
  });
});
