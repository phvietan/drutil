import dns from 'dns';

/**
 * Resolve DNS of hostname to ipv4
 * In case of error, it returns empty string
 *
 * @param {string} hostname - Hostname to be resolved
 * @return {Promise<string>}
 */
export async function dnsResolve(hostname: string): Promise<string> {
  return new Promise<string>((resolve) => {
    dns.lookup(hostname, 4, (err, addr) => {
      if (err) resolve('');
      resolve(addr);
    });
  });
}
