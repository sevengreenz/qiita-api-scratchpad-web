jest.mock('../../../data/repositories/data-stores/token/token-data-store-factory');

import TokenRepository from '../../../src/data/repositories/TokenRepository';
import { ITokenDataStore } from '../../../src/data/repositories/data-stores/token/TokenDataStoreInterface';
import DataStoreFactory from '../../../src/data/repositories/data-stores/token/TokenDataStoreFactory';

describe('tokenRepository', () => {
  const update = jest.fn(() => { });

  const mockTokenDataStore: ITokenDataStore = {
    update,
    issue: (token) => {
      return new Promise<string>((resolve) => {
        resolve(token);
      });
    },
    find: () => 'found_token',
  };

  DataStoreFactory.createCloudDataStore = jest.fn(() => mockTokenDataStore);
  DataStoreFactory.createLocalDataStore = jest.fn(() => mockTokenDataStore);

  describe('issue', () => {
    const expected = 'token';
    const result = TokenRepository.issue(expected);

    it('should return expected', () => {
      expect(result).resolves.toBe(expected);
    });

    it('should createCloudDataStore called', () => {
      expect(DataStoreFactory.createCloudDataStore).toBeCalled();
    });
  });

  describe('find', () => {
    const result = TokenRepository.find();

    it('should return expected', () => {
      expect(result).toBe('found_token');
    });

    it('should createLocalDataStore called', () => {
      expect(DataStoreFactory.createLocalDataStore).toBeCalled();
    });
  });

  describe('update', () => {
    TokenRepository.update('token');

    it('should be called update function', () => {
      expect(update).toBeCalled();
    });
  });
});
