import { IResource } from '../Qiita';
import SchemaRepository from '../../data/repositories/SchemaRepository';

const schemaInteractor = {
  /**
   * Qiita API Schema 取得
   */
  fetch: async (): Promise<IResource[]> => {
    return await SchemaRepository.fetch();
  },
};

export default schemaInteractor;



