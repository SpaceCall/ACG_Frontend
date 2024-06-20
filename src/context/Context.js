import React, { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../lang/en.json';
import Ukrainian from '../lang/uk.json';

export const LangContext = createContext(null);

const locale = navigator.language.startsWith('uk') ? 'uk' : 'en';

const messages = {
    en: English,
    uk: Ukrainian
};

export default function Context({ children }) {
    const [activeLang, setActiveLang] = useState(locale);

    const setUkrainianLang = () => {
        setActiveLang('uk');
    };

    const setEnglishLang = () => {
        setActiveLang('en');
    };

    const value = {
        activeLang,
        setUkrainianLang,
        setEnglishLang
    };

    return (
        <IntlProvider locale={activeLang} messages={messages[activeLang]}>
            <LangContext.Provider value={value}>
                {children}
            </LangContext.Provider>
        </IntlProvider>
    );
}
