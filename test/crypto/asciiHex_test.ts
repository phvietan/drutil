import chai from 'chai';
import { asciiToHex, hexToAscii } from '../../src/crypto/asciiHex';

const assert = chai.assert;

describe('Test hexToAscii', () => {
  it('should correctly convert hex string to ascii', () => {
    const hexString = '41416161';
    const result = hexToAscii(hexString);
    assert(result === 'AAaa');
  });

  it('should throw error if invalid hex string', () => {
    try {
      const hexString = '4141xffaa4141';
      hexToAscii(hexString);
      assert(false); // Should never reach this line
    } catch (err) {
      assert(err.message === 'Input string is not hex');
    }
  });
});

describe('Test asciiToHex', () => {
  it('should correctly convert ascii string to hex', () => {
    const asciiString = 'aaAA';
    const result = asciiToHex(asciiString);
    assert(result === '61614141');
  });
});
