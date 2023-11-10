import React from 'react'
import twitter from './../../../assets/icons/twitter.svg'
import facebook from './../../../assets/icons/facebook.svg'
import instagram from './../../../assets/icons/instagram.svg'
import { Link } from 'react-router-dom'
import styles from './medias.module.scss'

export default function Medias() {
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
        <nav className={styles.medias}>
            <ul>
                {medias.map((media, index) => (
                    <li key={index}>
                        <Link><img src={media.src} alt={media.alt} /></Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
