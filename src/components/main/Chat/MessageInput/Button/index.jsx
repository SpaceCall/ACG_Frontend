import React from 'react'
import styles from './button.module.scss'
import send from './../../../../../assets/icons/send.svg'

export default function MessageButton() {
    return (
        <button className={styles.messageInput__button}><img src={send} alt="Send" /></button>
    )
}
