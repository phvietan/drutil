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
    const writeStream = fs.createWriteStream(
        __dirname + '/test.log',
        {flags: 'w'},
    );
    log('Hello from test log', writeStream);
    const logContent = fs.readFileSync(__dirname + '/test.log', 'utf-8');
    assert(logContent.includes('Hello from test log'));
    fs.unlinkSync(__dirname + '/test.log');
  });
});
