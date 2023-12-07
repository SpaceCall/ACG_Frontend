import React from 'react'
import styles from './intro.module.scss'

export default function Intro() {
    return (
        <div id='intro' className={styles.intro}>
            <div className="container">
                <div className={styles.intro__wrapper}>
                    <div className={styles.intro__content}>
                        <p className={styles.intro__content__text}>Personalized Courses Tailored Just for You</p>
                        <h1 className={styles.intro__content__title}>Unlock Your Learning Potential with ACG</h1>
                        <a href='#' className={styles.intro__content__button}>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
