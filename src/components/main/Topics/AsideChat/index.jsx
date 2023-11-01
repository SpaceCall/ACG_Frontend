import React, { useState } from 'react'
import styles from './asideChat.module.scss'
import AsideButton from './AsideButton'
import AsideChatWindow from './AsideChatWindow'
import AsideMessageInput from './AsideMessageInput'
export default function AsideChat() {
    const [isOpened, setIsOpened] = useState(true)
    const chatRef = useRef(null)

    return (
        <div
            className={styles.asideChat}
            ref={chatRef}
            style={{
                transform: `translateX(${isOpened ? '0' : '100%'})`,
            }}
        >

            <AsideButton isOpened={isOpened} setIsOpened={setIsOpened} chatRef={chatRef} />
            <AsideChatWindow />
            <AsideMessageInput />
        </div>
    )
}
