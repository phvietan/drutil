import chai from 'chai';
import {loadApiClientConfig} from '../../src/api_client/config';

const assert = chai.assert;

describe('Test loadApiClientConfig', () => {
  afterEach(() => {
    process.env.API_SERVER = '';
    process.env.API_SECRET = '';
  });

  describe('test when process.env not contains specified keys', () => {
    it('should throw error', () => {
      try {
        loadApiClientConfig();
        assert(false); // Never reach this;
      } catch (err: any) {
        assert(err.message.includes('Cannot loadConfig without environment'));
      }
    });
  });

  describe('test when process.env contains specified keys', () => {
    it('should successfully return keys', () => {
      process.env.API_SERVER = 'http://drstra.in:4499';
      process.env.API_SECRET = 'secret';
      const conf = loadApiClientConfig();
      assert(conf.apiServer === 'http://drstra.in:4499');
      assert(conf.apiSecret === 'secret');
    });
  });
});
