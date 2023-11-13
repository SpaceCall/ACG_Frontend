import React from 'react'
import styles from './links.module.scss'

export default function Links() {
    const links = [
        {
            value: 'Use cases',
            path: 'cases'
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
                        <a href={`#${link.path}`}>{link.value}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
