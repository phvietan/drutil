import crypto from 'crypto';

/**
 * Generate random hex string with specified length
 *
 * @param {number} len - Length of the generated random string
 * @return {string} Return a random hex string with specified length
 */
export function getRandomString(len: number): string {
  const randomString = crypto.randomBytes(Math.ceil(len / 2)).toString('hex');
  return randomString.slice(0, len);
}
