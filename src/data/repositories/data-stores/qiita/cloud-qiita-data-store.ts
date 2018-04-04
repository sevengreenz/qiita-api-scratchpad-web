import { IQiitaDataStore } from './qiita-data-store-interface';
import { AxiosResponse } from 'axios';
import { IApiResponse } from '../../../../domain/qiita';
import errorFactory from '../../../errors/error-factory';
import tokenRepository from '../../token-repository';
import httpClientFactory from '../../../api/http-client-factory';
import uuid from 'uuid/v4';

const cloudQiitaDataStore =
  (): IQiitaDataStore => {
    const httpClient = httpClientFactory.createHttpClient({
      baseURL: process.env.BASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenRepository.find() || ''}`,
      },
    });

    return {
      execute: async (method, url, params): Promise<IApiResponse> => {
        const result: IApiResponse = await httpClient.post('/rpc', {
          jsonrpc: '2.0',
          method: 'executeApi',
          params: { method, url, params },
          id: uuid(),
        })
          .then((response: AxiosResponse) => {
            console.log(response);
            if (response.data.errors !== undefined) {
              if (response.data.errors.code === -32604) return Promise.reject(response);
              return Promise.resolve({
                headers: [],
                data: response.data.errors.message,
              });
            }

            return Promise.resolve({
              headers: response.data.result.headers,
              data: response.data.result.data,
            });
          })
          // .catch((error: AxiosError) => {
          //   console.log(error);
          //   if (error.response === undefined) return Promise.reject(error);

          //   if (error.response.data.errors.code === -32604) return Promise.reject(error);

          //   // 401 以外は正常として扱う
          //   return Promise.resolve({
          //     headers: error.response.headers,
          //     data: error.response.data,
          //   });
          // })
          .catch(errorFactory.throwError);

        return result;
      },

    };
  };

export default cloudQiitaDataStore;
