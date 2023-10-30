import React from 'react'
import Logo from '../../components/header/Logo'
import Links from '../../components/header/Links'
import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <Logo />
                    <Links />
                </div>
            </div>
        </div>
    )
}
