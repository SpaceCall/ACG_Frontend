import React, { createContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useParams } from 'react-router-dom';
import English from '../lang/en.json';
import Ukrainian from '../lang/uk.json';

export const LangContext = createContext(null);

const messages = {
    en: English,
    uk: Ukrainian
};

export default function Context({ children }) {
    const { lang } = useParams()
    const browserLocale = navigator.language.startsWith('en') ? 'en' : 'uk'

    const initialLocale = lang || localStorage.getItem('locale') || browserLocale
    const [activeLang, setActiveLang] = useState(initialLocale)
    const [isLogged, setIsLogged] = useState(true) 

    useEffect(() => {
        localStorage.setItem('locale', activeLang)
    }, [activeLang])

    const setUkrainianLang = () => setActiveLang('uk')

    const setEnglishLang = () => setActiveLang('en')

    const value = {
        activeLang,
        setUkrainianLang,
        setEnglishLang,
        isLogged,
        setIsLogged
    };

    return (
        <LangContext.Provider value={value}>
            <IntlProvider locale={activeLang} messages={messages[activeLang]}>
                {children}
            </IntlProvider>
        </LangContext.Provider>
    );
}
