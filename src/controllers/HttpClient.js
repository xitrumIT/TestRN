import axios from 'axios';
import { Config } from 'react-native-config';
import i18n from '@/locales';

const client = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject({
        error: i18n.t('connection_error'),
      });
    } else {
      return Promise.reject(error);
    }
  }
);

const setAuthorization = token => {
  client.defaults.headers.common.authorization = token;
};

const clearAuthorization = () => {
  delete client.defaults.headers.common.authorization;
};

export const HttpClient = { ...client, setAuthorization, clearAuthorization };
