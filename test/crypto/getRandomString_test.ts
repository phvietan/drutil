import chai from 'chai';
import {getRandomString} from '../../src/crypto/getRandomString';

const assert = chai.assert;

describe('Test getRandomString', () => {
  describe('test random 100 will unequal with each other', () => {
    it('should have no number that equal each other', () => {
      const a: string[] = [];
      for (let i = 0; i < 100; i += 1) a.push(getRandomString(32));
      for (let i = 0; i < 100; i += 1) {
        for (let j = i+1; j < 100; j += 1) {
          assert(a[i] !== a[j]);
        }
      }
    });
  });
});
