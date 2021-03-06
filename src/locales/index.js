import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import * as resources from './resources';

// import en from './en.json';
// import vi from './vi.json';
// import jp from './jp.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      vi: {
        translation: require('./vi.json'),
      },
      en: {
        translation: require('./en.json'),
      },
      jp: {
        translation: require('./jp.json'),
      },
    },
    // resources: {
    //   ...Object.entries(resources).reduce((acc, [key, value]) => ({
    //     ...acc,
    //     [key]: {
    //       translation: value,
    //     },
    //   })),
    // },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
