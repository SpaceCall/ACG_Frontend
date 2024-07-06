import React, { useRef, useState, useContext, useEffect } from 'react'
import { LangContext } from '../../../context/Context'
import styles from './selector.module.scss'

export default function LanguageSelector() {
    const [showLanguages, setShowLanguages] = useState(false)
    const languageRef = useRef(null)
    const langContext = useContext(LangContext)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowLanguages(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    const handleLanguageClick = (languageSetter) => {
        return () => {
            languageSetter()
            setShowLanguages(false)
            window.location.reload()
        }
    }

    return (
        <div className={styles.langSelector} ref={languageRef}>
            <span onClick={() => setShowLanguages(!showLanguages)}>
                {langContext.activeLang.toUpperCase()}
            </span>
            {showLanguages && 
                <div className={styles.langSelector__buttons}>
                    <button onClick={handleLanguageClick(langContext.setEnglishLang)}>EN</button>
                    <button onClick={handleLanguageClick(langContext.setUkrainianLang)}>UK</button>
                </div>
            }
        </div>
    );
}
