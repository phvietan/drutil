import fs from 'fs';
import chai from 'chai';
import {log} from '../../src/logger/log';

const assert = chai.assert;

describe('Test log', () => {
  it('should log to stdout', () => {
    log('Hello from test log');
    assert(true);
  });

  it('should log to file', () => {
    log('Hello from test log', __dirname + '/test.log');
    const logContent = fs.readFileSync(__dirname + '/test.log', 'utf-8');
    assert(logContent.includes('Hello from test log'));
    fs.unlinkSync(__dirname + '/test.log');
  });
});
