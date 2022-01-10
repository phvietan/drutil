import fs from 'fs';
import chai from 'chai';
import {warningLog} from '../../src/logger/warningLog';

const assert = chai.assert;

describe('Test warningLog', () => {
  it('should log warning message to stdout', () => {
    warningLog('Hello from warningLog');
    assert(true);
  });

  it('should log to file', () => {
    warningLog('Hello from warningLog', __dirname + '/warningLog.log');
    const logContent = fs.readFileSync(__dirname + '/warningLog.log', 'utf-8');
    assert(logContent.includes('Hello from warningLog'));
    fs.unlinkSync(__dirname + '/warningLog.log');
  });
});
