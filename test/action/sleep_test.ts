import chai from 'chai';
import { sleep } from '../../src/action/sleep';

const assert = chai.assert;

describe('Test sleep', () => {
  it('should correctly sleep', async () => {
    const sleepTime = 150;

    const before = new Date();
    await sleep(sleepTime);
    const after = new Date();
    const timeBetween = (after as any) - (before as any);
    assert(timeBetween >= sleepTime && timeBetween <= sleepTime + 50);
  });
});
