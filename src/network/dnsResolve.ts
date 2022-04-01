import dns from 'dns';

/**
 * Enum for constants of DNS resolve utilities
 *
 * @enum {number} DnsResolveConstants
 * @property IPV4 - DNS resolve value for ipv4 A record
 * @property IPV6 - DNS resolve value for ipv6 AAAA record
 */
export enum DnsResolveConstants {
  IPV4 = 4,
  IPV6 = 6,
}

/**
 * Resolve DNS of hostname to ipv4
 * In case of error, it returns empty string
 *
 * @function
 * @param {string} hostname - Hostname to be resolved
 * @param {DnsResolveConstants} ipVersion - IP version to ask for dns resolve, default to ipv4
 * @return {Promise<string>} return promise of ip of hostname
 */
export async function dnsResolve(
  hostname: string,
  ipVersion: DnsResolveConstants = DnsResolveConstants.IPV4,
): Promise<string> {
  return new Promise<string>((resolve) => {
    dns.lookup(hostname, ipVersion, (err, addr) => {
      if (err) resolve('');
      resolve(addr);
    });
  });
}
