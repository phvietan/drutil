import crypto from 'crypto';

/**
 * Compare 2 strings a and b with time safety
 *
 * @param {string} a - First string to compare
 * @param {string} b - Second string to compare
 * @return {boolean} True/False depends on whether a equals b
 */
export function compareSafe(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  try {
    return crypto.timingSafeEqual(bufA, bufB);
  } catch (err) {
    return false;
  }
}
