import React from 'react'
import styles from './asideButton.module.scss'
import arrow from './../../../../../assets/icons/aside-chat-arrow.svg'
import arrowReversed from './../../../../../assets/icons/aside-chat-arrow-reversed.svg'

export default function AsideButton({ isOpened, setIsOpened }) {
    const toggleChat = () => setIsOpened(!isOpened)

    return (
        <button className={styles.asideButton} onClick={toggleChat}><img src={isOpened ? arrow : arrowReversed} alt="Show" /></button>
    )
}
