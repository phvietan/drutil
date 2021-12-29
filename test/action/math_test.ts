import chai from 'chai';
import {getRandomBetween} from '../../src/action/math';

const assert = chai.assert;

describe('Test randomBetween', () => {
  it('should correctly generate random between two numbers', () => {
    const arr = [];
    const left = 2;
    const right = 4;

    const checkCnt = {};
    for (let i = 0; i < 2000; i += 1) {
      const randomVal = getRandomBetween(left, right);
      arr.push(randomVal);
      assert(randomVal >= left);
      assert(randomVal <= right);
      checkCnt[randomVal] = true;
    }
    const numKeys = Object.keys(checkCnt).length;
    assert(numKeys === 3);
  });
});
