import React from 'react'
import linkedin from './../../../assets/icons/linkedin.svg'
// import telegram from './../../../assets/icons/telegram.svg'
import { Link } from 'react-router-dom'
import styles from './medias.module.scss'

export default function Medias({ profileLink }) {
    const medias = [
        {
            src: linkedin,
            alt: 'linkedin',
            path: profileLink?.linkedin
        },
        // {
        //     src: telegram,
        //     alt: 'telegram',
        //     path: profileLink?.telegram
        // }
    ]

    return (
        <nav className={styles.medias}>
            <ul>
                {medias.map((media, index) => (
                    <li key={index}>
                        <Link to={media.path}><img src={media.src} alt={media.alt} /></Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
