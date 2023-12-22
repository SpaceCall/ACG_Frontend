import React, { useRef, useState } from 'react'
import styles from './asideChat.module.scss'
import AsideButton from './AsideButton'
import AsideChatWindow from './AsideChatWindow'
import AsideMessageInput from './AsideMessageInput'

export default function AsideChat() {
    const [isOpened, setIsOpened] = useState(false)
    const chatRef = useRef(null)
    const [messages, setMessages] = useState([])
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [index, setIndex] = useState(0);
    const botMessages = [
        {
            text: "No, in Python, you do not need to put a semicolon (;) at the end of each line. Python uses newlines to end a statement, so a semicolon is not necessary. However, semicolons can be used to separate multiple statements on a single line if needed, but this is generally discouraged as it can make the code less readable.",
            type: "message"
        },
    ]

    const createUserMessages = (label) => {
        return {
            label,
            isUserSend: true,
            id: Date.now(),
        }
    }

    const createBotMessages = () => {
        return {
            label: botMessages[index].text,
            isUserSend: false,
            type: botMessages[index].type,
            id: Date.now() + 1,
        }
    }

    const sendMessage = (text) => {
        if (text.length >= 1) {
            setIsSubmitDisabled(true);
            setMessages([createBotMessages(), createUserMessages(text)])
            setIndex(index + 1)
        }
    }
    const enableSubmit = () => {
        setIsSubmitDisabled(false)
    }


    return (
        <div
            className={styles.asideChat}
            ref={chatRef}
            style={{
                transform: `translateX(${isOpened ? '0' : '100%'})`,
            }}
        >
            <div className={styles.asideChat__wrapper}>
                <AsideButton isOpened={isOpened} setIsOpened={setIsOpened} chatRef={chatRef} />
                <AsideChatWindow messages={messages} enableSubmit={enableSubmit} />
                <AsideMessageInput sendMessage={sendMessage} isSubmitDisabled={isSubmitDisabled} />
            </div>
        </div>
    )
}

