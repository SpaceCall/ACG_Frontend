import React, { useRef, useState, useContext, useEffect } from 'react';
import { LangContext } from '../../../context/Context';
import styles from './selector.module.scss';

export default function LanguageSelector() {
    const [showLanguages, setShowLanguages] = useState(false);
    const languageRef = useRef(null);
    const langContext = useContext(LangContext);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowLanguages(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleEnglishClick = () => {
        langContext.setEnglishLang();
        setShowLanguages(false);
    };

    const handleUkrainianClick = () => {
        langContext.setUkrainianLang();
        setShowLanguages(false);
    };

    return (
        <div className={styles.langSelector} ref={languageRef} onClick={() => setShowLanguages(!showLanguages)}>
            <span>{langContext.activeLang.toUpperCase()}</span>
            {showLanguages && 
                <div className={styles.langSelector__buttons}>
                    <button onClick={handleEnglishClick}>EN</button>
                    <button onClick={handleUkrainianClick}>UK</button>
                </div>
            }
        </div>
    );
}
