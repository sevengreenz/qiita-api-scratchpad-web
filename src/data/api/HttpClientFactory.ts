import axios, { AxiosRequestConfig } from 'axios';
import ServerError from '../errors/ServerError';
import ErrorFactory from '../errors/ErrorFactory';

const createHttpClient = (config: AxiosRequestConfig) => {
  const instance = axios.create(config);
  instance.interceptors.response.use(
    response => {
      console.log(response);

      if (response.data.error !== undefined) {
        ErrorFactory.throwError(response);
      }

      return response;
    },
    error => {
      console.log(error);

      throw new ServerError(error.message);
    }
  );

  return instance;
};

export default {
  createHttpClient
};
