import axios, {AxiosInstance, Method} from 'axios';
import {getRandomString} from '../crypto/getRandomString';
import {hmac} from '../crypto/hmac';
import {loadApiClientConfig, DRUTIL_HEADER} from './config';

type DrutilRequest = {
  method: Method,
  url: string,
  body: string,
  nonce: string,
}

/**
 * Calculate request signature to be put on request header
 * @param {string} secret - Secret key hex encoded
 * @param {string} req - {method, url, body, nonce} that needs to get signature
 * @return {ApiClientConfig} - Holds apiServer endpoint and apiSecret string
 */
export function getRequestSignature(
    secret: string,
    req: DrutilRequest,
): string {
  const content = `${req.method}:${req.url}:${req.body}:${req.nonce}`;
  return hmac(secret, content);
}

/**
 * Read process.env.API_SERVER and process.env.API_SECRET and return
 * @return {AxiosInstance} - instance that can be used to connect to API_SERVER
 */
export function spawnApiClientInstance(): AxiosInstance {
  const apiClientConfig = loadApiClientConfig();
  const instance = axios.create({
    baseURL: apiClientConfig.apiServer,
  });
  instance.interceptors.request.use(function(config) {
    config.headers = config.headers ?? {};

    const nonce = getRandomString(32);
    const {url, data: body, method} = config;

    const sig = getRequestSignature(
        apiClientConfig.apiSecret,
        {body, nonce, url: url || '', method: method || 'GET'},
    );
    config.headers[DRUTIL_HEADER.NONCE] = nonce;
    config.headers[DRUTIL_HEADER.SIGNATURE] = sig;
  });
  return instance;
}
