import crypto from 'crypto';

/**
 * Calculate hmac(secret, content)
 * @param {string} secret - Secret key hex encoded
 * @param {string} content - Content utf-8 encoded
 * @return {string} - HMAC result that encoded with hex
 */
export function hmac(secret: string, content: string): string {
  return crypto.createHmac('sha256', secret)
      .update(content)
      .digest('hex');
}
