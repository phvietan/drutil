import chai from 'chai';
import {compareSafe} from '../../src/crypto/compareSafe';

const assert = chai.assert;

describe('Test compareSafe', () => {
  describe('test 2 strings equal', () => {
    it('should return true', () => {
      const a = '1234';
      const b = '1234';
      const check = compareSafe(a, b);
      assert(check);
    });
  });

  describe('test 2 strings unequal', () => {
    it('should return false when 2 strings not equal in length', () => {
      const a = '1234';
      const b = '12345';
      const check = compareSafe(a, b);
      assert(check === false);
    });

    it('should return false when 2 strings same length but difference', () => {
      const a = '1234';
      const b = 'abcd';
      const check = compareSafe(a, b);
      assert(check === false);
    });
  });
});
