import React from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'

export default function Topics() {
    return (
        <div className={styles.topics}>
            <div className="container">
                <div className={styles.topics__wrapper}></div>
            </div>
            <AsideChat />
        </div>
    )
}
