import { IApiResponse } from '../Qiita';

export interface IQiitaRepository {
  execute: (method: string, url: string, params: object) => Promise<IApiResponse>;
}
