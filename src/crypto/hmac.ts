import crypto from 'crypto';

/**
 * Calculate hmac(secret, content[, algorithm = sha256])
 *
 * @function
 * @param {string} secret - Secret key hex encoded
 * @param {string} content - Content utf-8 encoded
 * @param {string} algorithm - The algorithm to create hmac [DEFAULT = sha256]
 * @return {string} - HMAC result that encoded with hex
 */
export function hmac(secret: string, content: string, algorithm: string = 'sha256'): string {
  return crypto.createHmac(algorithm, secret)
    .update(content)
    .digest('hex');
}
