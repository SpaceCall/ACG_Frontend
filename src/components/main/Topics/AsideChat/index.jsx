import React, { useState } from 'react'
import styles from './asideChat.module.scss'
import AsideButton from './AsideButton'
import AsideChatWindow from './AsideChatWindow'
import AsideMessageInput from './AsideMessageInput'

export default function AsideChat() {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className={styles.asideChat} style={{ 
            transform: `translateX(${isOpened ? '0' : '100%'})`,
        }}>
            <AsideButton isOpened={isOpened} setIsOpened={setIsOpened} />
            <AsideChatWindow />
            <AsideMessageInput />
        </div>
    )
}
