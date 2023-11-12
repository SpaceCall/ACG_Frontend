import React from 'react'
import styles from './mainPage.module.scss'
import Intro from './Intro'
import Cases from './Cases'
import HowItWorks from './HowItWorks'
import Team from './Team'
import Form from './Form'
import Contacts from './Contacts'

export default function MainPage() {
    return (
        <div className={styles.mainPage}>
            <div className={styles.mainPage__wrapper}>
                <Intro />
                <Cases />
                <HowItWorks />
                <Team />
                <Form />
                <Contacts />
            </div>
        </div>
    )
}
