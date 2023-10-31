import React from 'react'
import styles from './messageInput.module.scss'
import send from './../../../../assets/icons/send.svg'

export default function MessageInput() {
    return (
        <div className={styles.messageInput}>
            <div className="container">
                <div className={styles.messageInput__wrapper}>
                    <input className={styles.messageInput__input} type="text" placeholder='Type message' />
                    <button className={styles.messageInput__button}><img src={send} alt="Send" /></button>
                </div>
            </div>
        </div>
    )
}
