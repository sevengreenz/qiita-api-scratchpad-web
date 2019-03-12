import { IApiResponse } from '../../domain/Qiita';
import { IQiitaRepository } from '../../domain/repositories/QiitaRepositoryInterface';
import QiitaDataStoreFactory from './data-stores/qiita/QiitaDataStoreFactory';

const qiitaRepository: IQiitaRepository = {
  execute: async (method, url, params): Promise<IApiResponse> => {
    return await QiitaDataStoreFactory
      .createCloudDataStore()
      .execute(method, url, params);
  },
};

export default qiitaRepository;
