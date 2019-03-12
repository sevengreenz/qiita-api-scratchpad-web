import { IApiResponse } from '../../../../domain/Qiita';

export interface IQiitaDataStore {
  execute: (method: string, url: string, params: object) => Promise<IApiResponse>;
}
