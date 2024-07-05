import React from 'react'
import styles from './loginButtons.module.scss'
import { FormattedMessage } from 'react-intl';

export default function LoginButtons() {
    return (
        <div className={styles.header__loginButtons}>
            <a href='signIn' className={styles.signIn}><FormattedMessage id='signIn'></FormattedMessage></a>
            <a className={styles.signUp} href='signUp'><FormattedMessage id='signUp'></FormattedMessage></a>
        </div>
    )
}
