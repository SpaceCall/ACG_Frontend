import React from 'react'
import styles from './input.module.scss'

export default function Input() {
    return (
        <input className={styles.messageInput__input} type="text" placeholder='Type message' />
    )
}
