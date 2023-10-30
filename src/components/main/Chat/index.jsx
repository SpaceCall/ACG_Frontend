import React from 'react'
import MessageInput from './MessageInput'
import styles from './chat.module.scss'

export default function Chat() {
    return (
        <div className={styles.chat}>
            <div className="container">
                <div className={styles.chat__wrapper}>
                    <div className={styles.test} >
                    
                    </div>
                    <MessageInput />
                </div>
            </div>
        </div>
    )
}
