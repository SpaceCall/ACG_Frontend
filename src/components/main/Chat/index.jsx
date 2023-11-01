import React from 'react'
import MessageInput from './MessageInput'
import styles from './chat.module.scss'
import ChatWindow from './ChatWindow'

export default function Chat() {
    return (
        <div className={styles.chat}>
            <div className="container">
                <div className={styles.chat__wrapper}>
                    <ChatWindow />
                    <MessageInput />
                </div>
            </div>
        </div>
    )
}
