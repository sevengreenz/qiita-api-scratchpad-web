import { ISchemaDataStore } from './SchemaDataStoreInterface';
import { AxiosResponse } from 'axios';
import { IResource } from '../../../../domain/Qiita';
import HttpClientFactory from '../../../api/HttpClientFactory';

const cloudSchemaDataStore = (): ISchemaDataStore => {
  const httpClient = HttpClientFactory.createHttpClient({
    baseURL: process.env.QIITA_URL,
  });

  return {
    fetch: async (): Promise<IResource[]> => {
      return await httpClient
        .get('/schema?local=ja')
        .then((response: AxiosResponse) => Object.values(response.data.properties as IResource));
    },
  };
};

export default cloudSchemaDataStore;
