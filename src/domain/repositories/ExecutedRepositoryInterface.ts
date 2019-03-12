import { IExecuteApi } from '../Qiita';

export interface IExecutedRepository {
  getExecuted: () => IExecuteApi | null;
  setExecuted: (executed: IExecuteApi) => void;
}
