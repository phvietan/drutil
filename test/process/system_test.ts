import chai from 'chai';
import { system } from '../../src/process';

const assert = chai.assert;

describe('Test system', () => {
  it('should successfully run command', async () => {
    await system('uname', ['-a']);
    assert(true);
  });
});
