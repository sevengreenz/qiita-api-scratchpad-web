import { IQiitaSchema } from '../../../../domain/Qiita';

export interface ISchemaDataStore {
  fetch: () => Promise<IQiitaSchema>;
}
