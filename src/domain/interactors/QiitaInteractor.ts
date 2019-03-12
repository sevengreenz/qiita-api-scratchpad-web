import QiitaRepository from '../../data/repositories/QiitaRepository';
import Qiita, { IApiResponse, IExecuteApi } from '../Qiita';
import ExecutedRepository from '../../data/repositories/ExecutedRepository';

const qiitaInteractor = {
  /**
   * Qiita API 実行
   */
  executeApi: async (api: IExecuteApi): Promise<IApiResponse> => {
    return await QiitaRepository
      .execute(api.api.method, Qiita.embedUrlParams(api.api.href, api.urlParams), Qiita.removeUndefinedProperty(api.dataParams))
      .catch((error) => {
        // TODO: 成功時にセッションから削除
        ExecutedRepository.setExecuted(api);

        return Promise.reject(error);
      });
  },
};

export default qiitaInteractor;



