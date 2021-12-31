import chai from 'chai';
import {exec} from '../../src/process';
import {execSync} from 'child_process';

const assert = chai.assert;

describe('Test exec', () => {
  it('should successfully run ls -la', async () => {
    const res = await exec('ls', ['-la']);
    const t = execSync('ls -la').toString('utf-8');
    assert(res.stdout === t);
  });
});
