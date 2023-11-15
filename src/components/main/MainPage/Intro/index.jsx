import React from 'react'
import styles from './intro.module.scss'

export default function Intro() {
    return (
        <div id='intro' className={styles.intro}>
            <div className="container">
                <h1>Unlock Your Learning Potential with ACG</h1>
                <p className={styles.intro__personalized}>Personalized сourses Tailored Just for You</p>
                <div className={styles.intro__buttons}>
                    <a href='#form' className={styles.intro__buttons__course}>Get a demo</a>
                    <a href='#howitworks' className={styles.intro__buttons__learn}>Learn more</a>
                </div>
            </div>
        </div>
    )
}
