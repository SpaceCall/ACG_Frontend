import React, { useEffect, useState } from 'react'
import Links from '../../components/shared/Links'
import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'
import logo from './../../assets/icons/logo_black.svg'
// import LoginButtons from '../../components/header/LoginButtons'

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }

    const onClose = () => {
        setIsBurgerMenuOpen(false)
    }

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
                </NavLink>
                {windowWidth && windowWidth > 992 ? (
                    <Links />
                ) : (
                    <></>
                )}

                <div className={styles.header__burgerIcon} onClick={toggleBurgerMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                {/* <LoginButtons /> */}
            </div>
            {isBurgerMenuOpen &&
                <div className={isBurgerMenuOpen ? styles.modal : `${styles.header__modal} ${styles.closed}`}>
                    <div className={styles.modal__wrapper}>
                        <div className={styles.modal__content}>
                            <span className={styles.modal__close} onClick={onClose}>X</span>
                            <div className={styles.modal__body}>
                                <Links onClose={onClose} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
