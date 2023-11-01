import React from 'react'
import MessageInput from './MessageInput'
import styles from './chat.module.scss'
import ChatWindow from './ChatWindow'

export default function Chat() {
    return (
        <div className={styles.chat}>
             
            <ChatWindow />
            <MessageInput />
        </div>
        
    )
}
