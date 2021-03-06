import crypto from 'crypto';

/**
 * Calculate hash(content[, algorithm = sha256])
 *
 * @function
 * @param {string} content - Content utf-8 encoded
 * @param {string} algorithm - The hash algorithm [DEFAULT = sha256]
 * @return {string} Hash result that encoded with hex
 */
export function hash(content: string, algorithm: string = 'sha256'): string {
  return crypto.createHash(algorithm)
    .update(content)
    .digest('hex');
}
