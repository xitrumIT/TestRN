import i18n from '@/locales';

export class UserController {
  static async login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          resolve({ username });
        } else {
          reject(new Error(i18n.t('invalid_credentials')));
        }
      }, 500);
    });
  }

  static async logout() {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}
