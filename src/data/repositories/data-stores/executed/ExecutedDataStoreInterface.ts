import { IExecuteApi } from '../../../../domain/Qiita';

export interface IExecutedDataStore {
  getExecuted: () => IExecuteApi | null;
  setExecuted: (executeApi: IExecuteApi) => void;
}
