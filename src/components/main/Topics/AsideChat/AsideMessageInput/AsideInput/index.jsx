import React from 'react'
import styles from './asideInput.module.scss'

export default function AsideInput() {
    return (
        <input className={styles.asideMessageInput__input} type="text" placeholder='Type message' />
    )
}
