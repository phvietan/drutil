import chai from 'chai';
import {system} from '../../src/process';

const assert = chai.assert;

describe('Test system', () => {
  it('should successfully run ls -la', async () => {
    await system('ls', ['-la']);
    assert(true);
  });
});
