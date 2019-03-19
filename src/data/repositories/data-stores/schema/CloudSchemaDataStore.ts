import { ISchemaDataStore } from './SchemaDataStoreInterface';
import { AxiosResponse } from 'axios';
import { IQiitaSchema } from '../../../../domain/Qiita';
import HttpClientFactory from '../../../api/HttpClientFactory';

const cloudSchemaDataStore = (): ISchemaDataStore => {
  const httpClient = HttpClientFactory.createHttpClient({
    baseURL: process.env.QIITA_URL,
  });

  return {
    fetch: async (): Promise<IQiitaSchema> => {
      return await httpClient
        .get('/schema?local=ja')
        .then((response: AxiosResponse) => response.data as IQiitaSchema);
    },
  };
};

export default cloudSchemaDataStore;
