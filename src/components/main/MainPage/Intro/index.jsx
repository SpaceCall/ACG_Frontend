import React, { useContext } from 'react'
import styles from './intro.module.scss'
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../../../../context/Context';

export default function Intro() {
    const langContext = useContext(LangContext)

    return (
        <div id='intro' className={styles.intro}>
            <div className="container">
                <div className={styles.intro__wrapper}>
                    {/* <button onClick={langContext.setEnglishLang}>en</button>
                    <button onClick={langContext.setUkrainianLang}>uk</button> */}
                    <div className={styles.intro__content}>
                        <p className={styles.intro__content__text}>Get a course you'll definitely complete</p>
                        <p>
                            {/* <FormattedMessage
                                id="hello"
                                // defaultMessage="Edit the files and save to reload"
                            /> */}
                        </p>
                        <h1 className={styles.intro__content__title}>ACG generates courses based on your goals and experience</h1>
                        <a href='/comingsoon' className={styles.intro__content__button}>Start</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
