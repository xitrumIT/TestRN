import Env from '../services/env';

let baseURL = '';

switch (Env.environment) {
  case 'DEV':
    baseURL = '';
    break;
  case 'STA':
    baseURL = '';
    break;
  case 'PROD':
    baseURL = '';
    break;
}

export { baseURL };
