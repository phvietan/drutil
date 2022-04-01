import chai from 'chai';
import { dnsResolve, DnsResolveConstants } from '../../src/network';

const assert = chai.assert;

describe('Test dnsResolve', () => {
  it('should successfully resolve dns when given an existed name server', async () => {
    const result = await dnsResolve('drstra.in');
    assert(result === '194.233.75.188');
  });

  it('should successfully resolve dns when given an existed name server', async () => {
    const result = await dnsResolve('google.com', DnsResolveConstants.IPV6);
    assert(result.slice(0, 14) === '2404:6800:4003');
  });

  it('should return empty when given a non existed name server', async () => {
    const result = await dnsResolve('dcm.drstra.in');
    assert(result === '');
  });
});
