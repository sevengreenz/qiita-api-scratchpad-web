import CloudSchemaDataStore from './CloudSchemaDataStore';
import { ISchemaDataStore } from './SchemaDataStoreInterface';

const schemaDataStoreFactory = {
  createLocalDataStore: (): ISchemaDataStore => {
    throw new Error('Not Implemented');
  },

  createCloudDataStore: (): ISchemaDataStore => {
    return CloudSchemaDataStore();
  },
};

export default schemaDataStoreFactory;
