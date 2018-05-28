import axios, { AxiosRequestConfig } from 'axios';
import ServerError from '../errors/server-error';
import errorFactory from '../errors/error-factory';

const createHttpClient = (config: AxiosRequestConfig) => {
  const instance = axios.create(config);
  instance.interceptors.response.use(
    response => {
      console.log(response);

      if (response.data.errors !== undefined) {
        errorFactory.throwError(response);
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
