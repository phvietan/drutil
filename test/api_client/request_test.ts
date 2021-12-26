import chai from 'chai';
import {spawnApiClientInstance} from '../../src/api_client/request';

const assert = chai.assert;

describe('Test spawnApiClientInstance', () => {
  beforeEach(() => {
    process.env.API_SERVER = 'http://drstra.in:4499';
    process.env.API_SECRET = 'secret';
  });

  it('should successfully spawn api client', async () => {
    const instance = spawnApiClientInstance();
    const resp = await instance.get('/test');
  });
});
