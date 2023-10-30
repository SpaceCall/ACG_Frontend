import React from 'react'
import styles from './messageInput.module.scss'
import Input from './Input'
import Button from './Button'

export default function MessageInput() {
    return (
        <div className={styles.messageInput}>
            <div className="container">
                <div className={styles.messageInput__wrapper}>
                    <Input />
                    <Button />
                </div>
            </div>
        </div>
    )
}
