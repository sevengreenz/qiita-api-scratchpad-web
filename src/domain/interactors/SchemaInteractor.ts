import { IQiitaSchema } from '../Qiita';
import SchemaRepository from '../../data/repositories/SchemaRepository';

const schemaInteractor = {
  /**
   * Qiita API Schema 取得
   */
  fetch: async (): Promise<IQiitaSchema> => {
    return await SchemaRepository.fetch();
  },
};

export default schemaInteractor;



