import * as queryString from 'query-string';

const makeAuthorizationUrl = (): string => {
  const params: { [key: string]: string } = {
    client_id: process.env.QIITA_CLIENT_ID || '',
    scope: 'read_qiita write_qiita',
    state: 'scratchpad',
  };

  return `https://qiita.com/api/v2/oauth/authorize?${queryString.stringify(params)}`;
};

export default {
  makeAuthorizationUrl,
};
