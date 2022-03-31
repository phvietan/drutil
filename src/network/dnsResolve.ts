import dns from 'dns';

export async function dnsResolve(hostname: string): Promise<string> {
  return new Promise<string>((resolve) => {
    dns.lookup(hostname, 4, (err, addr) => {
      if (err) resolve('');
      resolve(addr);
    });
  });
}
