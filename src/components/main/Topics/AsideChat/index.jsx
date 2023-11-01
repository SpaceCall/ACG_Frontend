import React, { useRef, useState } from 'react'
import styles from './asideChat.module.scss'
import AsideButton from './AsideButton'
import AsideChatWindow from './AsideChatWindow'
import AsideMessageInput from './AsideMessageInput'
import Draggable from  'react-draggable'
export default function AsideChat() {
    const [isOpened, setIsOpened] = useState(true)
    const chatRef = useRef(null)

    return (
        <div 
            className={styles.asideChat} 
            ref={chatRef}
            style={{ 
                left: `${isOpened ? '100%' : '79%'}`,
            }}
        >
            
             <AsideButton isOpened={isOpened} setIsOpened={setIsOpened} chatRef={chatRef} />
              <AsideChatWindow />
              <AsideMessageInput/>
            </div>
    )
}
