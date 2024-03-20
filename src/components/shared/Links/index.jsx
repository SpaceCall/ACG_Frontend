import React from 'react'
import styles from './links.module.scss'

export default function Links() {
    const links = [
        {
            value: 'About us',
            path: 'cases',
            anchor: true
        },
        {
            value: 'How it works',
            path: 'howitworks',
            anchor: true
        },
        {
            value: 'Blog',
            path: 'blogs',
            anchor: false
        },
        {
            value: 'Contacts',
            path: 'contacts',
            anchor: true
        },
    ]

    return (
        <nav className={styles.header__links}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        {link.anchor ? <a href={`#${link.path}`}>{link.value}</a> : <a href={`${link.path}`}>{link.value}</a>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
