import React from 'react'
import styles from './contacts.module.scss'
import Links from './../../../header/Links'
import { Link } from 'react-router-dom'
import twitter from './../../../../assets/icons/twitter.svg'
import facebook from './../../../../assets/icons/facebook.svg'
import instagram from './../../../../assets/icons/instagram.svg'

export default function Contacts() {

    const medias = [
        {
            src: twitter,
            alt: 'twitter'
        },
        {
            src: facebook,
            alt: 'facebook'
        },
        {
            src: instagram,
            alt: 'instagram'
        }
    ]

    return (
        <div id='contacts' className={styles.contacts}>
            <div className={styles.contacts__links}>
                <Links />
            </div>
            <div className={styles.contacts__line}></div>
            <div className={styles.contacts__footer}>
                <p>© 2023 ACG. All rights reserved.</p>
                <nav className={styles.contacts__footer__medias}>
                    <ul>
                        {medias.map((media, index) => (
                            <li key={index}>
                                <Link><img src={media.src} alt={media.alt} /></Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
