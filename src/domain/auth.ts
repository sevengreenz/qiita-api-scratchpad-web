import * as queryString from 'query-string';
import uuid from 'uuid/v4';

const createState = () => uuid();

const makeAuthorizationUrl = (state: string): string => {
  const params: { [key: string]: string } = {
    state,
    client_id: process.env.QIITA_CLIENT_ID || '',
    scope: 'read_qiita write_qiita',
  };

  return `https://qiita.com/api/v2/oauth/authorize?${queryString.stringify(params)}`;
};

export default {
  createState,
  makeAuthorizationUrl,
};
