import React from 'react'
import styles from './intro.module.scss'
import { FormattedMessage } from 'react-intl';

export default function Intro() {
    return (
        <div id='intro' className={styles.intro}>
            <div className="container">
                <div className={styles.intro__wrapper}>
                    <div className={styles.intro__content}>
                        <p className={styles.intro__content__text}>
                            <FormattedMessage id="landing.main.subtitle" />
                        </p>
                        <h1 className={styles.intro__content__title}>
                            <FormattedMessage id="landing.main.title" />
                        </h1>
                        <a href='/comingsoon' className={styles.intro__content__button}>
                            <FormattedMessage id="landing.main.start" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
