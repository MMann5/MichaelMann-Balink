import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common_en from './translation/en/translation.json'
import common_fr from './translation/fr/translation.json'
import common_he from './translation/he/translation.json'

const ressources = {
    en: {
        translation: common_en
    },
    fr: {
        translation: common_fr
    },
    he: {
        translation: common_he
    },
}

i18n
    .use(initReactI18next)
    .init({
        resources: ressources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n