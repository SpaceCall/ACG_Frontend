import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../../assets/icons/logo.svg'
import styles from './logo.module.scss'

export default function Logo() {
    return (
        <NavLink to='/'>
            <img src={logo} alt="ACG" />
            {window.innerWidth > 992 ? <span className={styles.logo__name}>ACG</span> : null}
        </NavLink>
    )
}
