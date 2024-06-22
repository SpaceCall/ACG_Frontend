import React from 'react'
import styles from './loginButtons.module.scss'

export default function LoginButtons() {
    return (
        <div className={styles.header__loginButtons}>
            <a href='signIn' className={styles.signIn}><span>Log in</span></a>
            <a className={styles.signUp} href='signUp'>Sign up</a>
        </div>
    )
}
