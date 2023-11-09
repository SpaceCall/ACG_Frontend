import React from 'react'
import styles from './intro.module.scss'

export default function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.intro__personalized}>
                <p>Personalized</p>
                <p>Courses Tailored Just for You</p>
            </div>
            <h1>Unlock Your Learning Potential with ACG</h1>
            <div className={styles.intro__buttons}>
                <button className={styles.intro__buttons__demo}><span>Get a demo</span></button>
                <button className={styles.intro__buttons__learn}><span>Learn more</span></button>
            </div>
        </div>
    )
}
