import React from 'react'
import styles from './asideChatButton.module.scss'
import send from './../../../../../../assets/icons/send.svg'

export default function AsideChatButton() {
    return (
        <button className={styles.asideMessageInput__button}><img src={send} alt="Send" /></button>
    )
}
