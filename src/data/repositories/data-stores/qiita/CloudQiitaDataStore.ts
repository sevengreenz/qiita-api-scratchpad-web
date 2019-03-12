import { IQiitaDataStore } from './QiitaDataStoreInterface';
import { AxiosResponse } from 'axios';
import { IApiResponse } from '../../../../domain/Qiita';
import TokenRepository from '../../TokenRepository';
import HttpClientFactory from '../../../api/HttpClientFactory';
import uuid from 'uuid/v4';

const cloudQiitaDataStore = (): IQiitaDataStore => {
  const httpClient = HttpClientFactory.createHttpClient({
    baseURL: process.env.BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TokenRepository.find() || ''}`
    }
  });

  return {
    execute: async (method, url, params): Promise<IApiResponse> => {
      const result: IApiResponse = await httpClient
        .post('/rpc', {
          jsonrpc: '2.0',
          method: 'executeApi',
          params: { method, url, params },
          id: uuid()
        })
        .then((response: AxiosResponse) => {
          return Promise.resolve({
            headers: response.data.result.headers,
            data: response.data.result.data
          });
        });

      return result;
    }
  };
};

export default cloudQiitaDataStore;
