import { AxiosResponse } from 'axios';
import UnAuthorizedError from './UnauthorizedError';
import ServerError from './ServerError';

const throwError = (error: AxiosResponse) => {
  if (error.data.error.code === -32604) {
    throw new UnAuthorizedError(error.data.error.message);
  } else {
    throw new ServerError(error.data.error.message);
  }
};

export default {
  throwError,
};
