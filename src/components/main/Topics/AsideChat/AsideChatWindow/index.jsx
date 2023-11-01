import React from 'react'
import styles from './asideChatWindow.module.scss'
import AsideChatMessage from './../AsideChatMessage'

export default function AsideChatWindow() {
    return (
        <div className={styles.asideChatWindow}>
            <AsideChatMessage />
            <AsideChatMessage />
            <AsideChatMessage />
        </div>
    )
}
