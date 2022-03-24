import chai from 'chai';
import {system,systemStr} from '../../src/process';

const assert = chai.assert;

describe('Test system', () => {
  it('should successfully run command', async () => {
    await system('ls', ['-la']);
    assert(true);
  });
});

describe('Test systemStr', () => {
  it('should successfully run specified string command', async () => {
    await systemStr('ls -la');
    assert(true);
  });
});
