import chai from 'chai';
import {hmac} from '../../src/crypto/hmac';

const assert = chai.assert;

describe('Test hmac', () => {
  it('should successfully calculate hmac', () => {
    const text = 'I love cupcakes';
    const key = 'abcdeg';
    const res = hmac(key, text);
    const expected =
      '56cb0a0c07df8757557c4dcc68f73a9902577a400c3e6cf79cd75329f3a06f9b';
    assert(res === expected);
  });
});
