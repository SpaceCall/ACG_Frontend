import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './links.module.scss'

export default function Links() {
    const links = [
        {
            value: 'About us',
            path: 'about'
        },
        {
            value: 'How it works',
            path: 'howitworks'
        },
        {
            value: 'Our team',
            path: 'team'
        },
        {
            value: 'Contacts',
            path: 'contacts'
        },
    ]

    return (
        <nav className={styles.header__links}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path}>{link.value}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
