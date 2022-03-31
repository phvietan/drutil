import { isHex } from '../type/isHex';

/**
 * Convert string hex to string ascii
 *
 * @param {string} hex - Hex encoded string that needs to be converted to ascii
 * @return {string} Ascii string result
 */
export function hexToAscii(hex: string): string {
  if (!isHex(hex)) {
    throw new Error('Input string is not hex');
  }
  const inputBuf = Buffer.from(hex, 'hex');
  return inputBuf.toString('ascii');
}

/**
 * Convert string ascii to hex encoded string
 *
 * @param {string} ascii - Ascii string that needs to be converted to hex
 * @return {string} Hex encoded string result
 */
export function asciiToHex(ascii: string): string {
  const inputBuf = Buffer.from(ascii, 'ascii');
  return inputBuf.toString('hex');
}
