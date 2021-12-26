/* eslint-disable no-unused-vars */
export type ApiClientConfig = {
  apiServer: string,
  apiSecret: string,
};

export enum DRUTIL_HEADER {
  NONCE = 'X-DRUTIL-NONCE',
  SIGNATURE = 'X-DRUTIL-SIGNATURE',
}

/**
 * Read process.env.API_SERVER and process.env.API_SECRET and return
 * @return {ApiClientConfig} - Holds apiServer endpoint and apiSecret string
 */
export function loadApiClientConfig(): ApiClientConfig {
  const {API_SERVER: apiServer, API_SECRET: apiSecret} = process.env;
  if (!apiServer || !apiSecret) {
    throw new Error(
        'Cannot loadConfig without environment: API_SERVER, API_SECRET',
    );
  }
  return {apiServer, apiSecret};
}
