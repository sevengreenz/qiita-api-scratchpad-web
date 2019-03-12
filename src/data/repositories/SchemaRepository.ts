import { ISchemaRepository } from '../../domain/repositories/SchemaRepositoryInterface';
import SchemaDataStoreFactory from './data-stores/schema/SchemaDataStoreFactory';

const schemaRepository: ISchemaRepository = {
  fetch: async () => {
    return await SchemaDataStoreFactory
      .createCloudDataStore()
      .fetch();
  },
};

export default schemaRepository;
