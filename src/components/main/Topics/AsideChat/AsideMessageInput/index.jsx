import React from 'react'
import send from './../../../../../assets/icons/send.svg'
import styles from './asideMessageInput.module.scss'

export default function AsideMessageInput() {
    return (
        <div className={styles.asideMessageInput}>
            <input className={styles.asideMessageInput__input} type="text" placeholder='Type message' />
            <button className={styles.asideMessageInput__button}><img src={send} alt="Send" /></button>
        </div>
    )
}
