import React from 'react'
import Logo from '../../components/header/Logo'
import Links from '../../components/shared/Links'
import styles from './header.module.scss'
// import LoginButtons from '../../components/header/LoginButtons'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <Logo />
                <Links />
                {/* <LoginButtons /> */}
            </div>
        </div>
    )
}
