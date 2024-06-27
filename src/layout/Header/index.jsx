import React, { useContext, useEffect, useState } from 'react'
import Links from '../../components/shared/Links'
import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/icons/logo.svg'
import { LangContext } from '../../context/Context';
import LanguageSelector from '../../components/shared/LanguageSelector'
import LoginButtons from '../../components/header/LoginButtons'
import Avatar from '../../components/header/Avatar'

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }

    const onClose = () => {
        setIsBurgerMenuOpen(false)
    }

    const langContext = useContext(LangContext)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        if (window.innerWidth > 992 && isBurgerMenuOpen) {
            setIsBurgerMenuOpen(false)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowWidth, isBurgerMenuOpen])

    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <NavLink to='/' className={styles.header__logo}>
                    <img src={logo} alt="ACG" />
                    {/* <span>ACG</span> */}
                </NavLink>
                {windowWidth && windowWidth > 992 ? (
                    <Links />
                ) : (
                    <></>
                )}

                {!langContext.isLogged ? <LoginButtons /> : <Avatar />} 
                <div className={styles.header__burgerIcon} onClick={toggleBurgerMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <LanguageSelector />
            </div>
            {isBurgerMenuOpen &&
                <div className={isBurgerMenuOpen ? styles.modal : `${styles.header__modal} ${styles.closed}`}>
                    <div className={styles.modal__wrapper}>
                        <div className={styles.modal__content}>
                            <span className={styles.modal__close} onClick={onClose}>X</span>
                            <div className={styles.modal__body}>
                                <Links onClose={onClose} />
                                <a href='/signUp' className={styles.signUp}>
                                    <span>Sign up</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
