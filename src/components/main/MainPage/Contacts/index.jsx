import React from 'react'
import styles from './contacts.module.scss'
import Links from '../../../shared/Links'
import Medias from '../../../shared/Medias'

export default function Contacts() {
    return (
        <div id='contacts' className={styles.contacts}>
            <div className={styles.contacts__links}>
                <Links />
            </div>
            <div className={styles.contacts__line}></div>
            <div className={styles.contacts__footer}>
                <p>© 2023 ACG. All rights reserved.</p>
                <Medias />
            </div>
        </div>
    )
}
