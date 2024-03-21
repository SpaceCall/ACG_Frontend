import React from 'react'
import styles from './styles/index.module.scss'
import Medias from '../shared/Medias'

export default function Footer() {
    const year = new Date()
    return (
        <div id='contacts' className={styles.footer}>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__footer}>
                <p>© {year.getFullYear()} ACG. All rights reserved.</p>
                <Medias />
            </div>
        </div>  
    )
}
