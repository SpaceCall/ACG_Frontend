import React from 'react'
import styles from './asideChatMessage.module.scss'

export default function AsideChatMessage() {
    return (
        <>
            <div className={`${styles.asideChatMessage} botMessage`}>
                AsideChatMessage Aside Chat MessageAside ChatMessage
            </div>
            <div className={`${styles.asideChatMessage} personMessage`}>
                AsideChatMessage Aside Chat MessageAside ChatMessage
            </div>
        </>
    )
}
