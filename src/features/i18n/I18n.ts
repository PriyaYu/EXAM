import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../../../public/locales/en/translation.json';
import translationHK from '../../../public/locales/zh-hk/translation.json';
import translationCN from '../../../public/locales/zh-cn/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    hk: {
        translation: translationHK,
    },
    cn: {
        translation: translationCN
    }
};



i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;