import React from 'react'
import styles from './chatButtons.module.scss'

export default function ChatButtons() {
    return (
        <div className={styles.chatButtons}>
            <button className={styles.chatButtons__cancel}>
                <span>No, I want to change something</span>
            </button>
            <button className={styles.chatButtons__confirm}>
                <span>Yes, generate course</span>
            </button>
        </div>
    )
}
