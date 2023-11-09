import React from 'react'
import styles from './mainPage.module.scss'
import Intro from './Intro'

export default function MainPage() {
    return (
        <div className={styles.mainPage}>
            <div className={styles.mainPage__wrapper}>
                <Intro />
            </div>
        </div>
    )
}
