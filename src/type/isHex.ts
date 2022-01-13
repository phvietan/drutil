import { isString } from './typeCheck';

/**
 * Check if param is hex string or not
 * @param {string} value - Param to check if it is hex encoded string
 * @return {boolean} - True if param is a hex encoded string
 */
export function isHex(value: string): boolean {
  if (!isString(value)) return false;
  const a = parseInt(value, 16);
  return (a.toString(16) === value.toLowerCase());
}
