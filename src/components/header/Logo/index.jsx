import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../../assets/icons/logo.svg'
import styles from './logo.module.scss'

export default function Logo() {
    return (
        <NavLink to='/'>
            <img src={logo} alt="ACG" />
            <span className={styles.logo__name}>ACG</span>
        </NavLink>
    )
}
