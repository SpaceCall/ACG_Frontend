import React from 'react'
import AsideInput from './AsideInput'
import AsideChatButton from './AsideChatButton'
import styles from './asideMessageInput.module.scss'

export default function AsideMessageInput() {
    return (
        <div className={styles.asideMessageInput}>
            <AsideInput />
            <AsideChatButton />
        </div>
    )
}
