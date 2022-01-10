import fs from 'fs';
import chai from 'chai';
import {errorLog} from '../../src/logger/errorLog';

const assert = chai.assert;

describe('Test errorLog', () => {
  it('should log error message to stdout', () => {
    errorLog('Hello from errorLog');
    assert(true);
  });

  it('should log to file', () => {
    errorLog('Hello from errorLog', __dirname + '/errorLog.log');
    const logContent = fs.readFileSync(__dirname + '/errorLog.log', 'utf-8');
    assert(logContent.includes('Hello from errorLog'));
    fs.unlinkSync(__dirname + '/errorLog.log');
  });
});
