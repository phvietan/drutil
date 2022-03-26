import fs from 'fs';
import chai from 'chai';
import { successLog } from '../../src/logger/successLog';

const assert = chai.assert;

describe('Test successLog', () => {
  it('should log success message to stdout', () => {
    successLog('Hello from successLog');
    assert(true);
  });

  it('should log to file', () => {
    successLog('Hello from successLog', __dirname + '/successLog.log');
    const logContent = fs.readFileSync(__dirname + '/successLog.log', 'utf-8');
    assert(logContent.includes('Hello from successLog'));
    fs.unlinkSync(__dirname + '/successLog.log');
  });
});
