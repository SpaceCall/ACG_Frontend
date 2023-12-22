import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../../assets/icons/logo_black.svg'
import styles from './logo.module.scss'

export default function Logo() {
    return (
        <NavLink to='/' className={styles.logo}>
            <img src={logo} alt="ACG" />
            {/* <span className={styles.logo__name}>ACG</span> */}
        </NavLink>
    )
}
