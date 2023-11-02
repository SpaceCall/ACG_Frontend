import React from 'react'
import styles from './loginButtons.module.scss'

export default function LoginButtons() {
    return (
        <div className={styles.header__loginButtons}>
            <button className={styles.login}>Log in</button>
            <button className={styles.signUp}>
                <span>Sign up</span>
            </button>
        </div>
    )
}
