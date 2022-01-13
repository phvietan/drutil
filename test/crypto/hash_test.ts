import chai from 'chai';
import { hash } from '../../src/crypto/hash';

const assert = chai.assert;

describe('Test hmac', () => {
  it('should successfully calculate hmac', () => {
    const text = 'I love cupcakes';
    const res = hash(text);
    const expected =
      'd9f31f76f97e8ee1165ce7031c99d62e8b50f19649a20775300cc9fe706ba816';
    assert(res === expected);

    const text2 = 'yolo';
    const res2 = hash(text2, 'md5');
    const expected2 = '4fded1464736e77865df232cbcb4cd19';
    assert(res2 === expected2);
  });
});
