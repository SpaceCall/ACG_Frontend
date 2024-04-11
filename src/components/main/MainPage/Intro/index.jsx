import React from 'react'
import styles from './intro.module.scss'

export default function Intro() {
    
    return (
        <div id='intro' className={styles.intro}>
            <div className="container">
                <div className={styles.intro__wrapper}>
                    <div className={styles.intro__content}>
                        <p className={styles.intro__content__text}>Get the course that suits you perfectly</p>
                        <h1 className={styles.intro__content__title}>ACG generates courses based on your goals and experience</h1>
                        <a href='/comingsoon' className={styles.intro__content__button}>Start</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
