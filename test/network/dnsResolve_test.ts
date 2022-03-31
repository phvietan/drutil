import chai from 'chai';
import { dnsResolve } from '../../src/network';

const assert = chai.assert;

describe('Test dnsResolve', () => {
  it('should successfully resolve dns when given an existed name server', async () => {
    const result = await dnsResolve('drstra.in');
    assert(result === '194.233.75.188');
  });

  it('should return empty when given a non existed name server', async () => {
    const result = await dnsResolve('dcm.drstra.in');
    assert(result === '');
  });
});
