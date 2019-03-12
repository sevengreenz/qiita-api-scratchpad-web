import { IResource } from '../../../../domain/Qiita';

export interface ISchemaDataStore {
  fetch: () => Promise<IResource[]>;
}
