import React from 'react'
import linkedin from './../../../assets/icons/linkedin.svg'
import telegram from './../../../assets/icons/telegram.svg'
import { Link } from 'react-router-dom'
import styles from './medias.module.scss'

export default function Medias({ profileLinks }) {
    const medias = [
        {
            src: linkedin,
            alt: 'linkedin',
            path: profileLinks?.linkedin
        },
        {
            src: telegram,
            alt: 'telegram',
            path: profileLinks?.telegram
        }
    ]

    return (
        <nav className={styles.medias}>
            <ul>
                {medias.map((media, index) => (
                    <li key={index}>
                        <a href={media.path} target='_blank'><img src={media.src} alt={media.alt} /></a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
