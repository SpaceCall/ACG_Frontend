import React, { useRef, useState } from 'react'
import styles from './asideChat.module.scss'
import AsideButton from './AsideButton'
import AsideChatWindow from './AsideChatWindow'
import AsideMessageInput from './AsideMessageInput'

export default function AsideChat() {
    const [isOpened, setIsOpened] = useState(false)
    const chatRef = useRef(null)
    const [messages, setMessages] = useState([])
    const [index, setIndex] = useState(0);
    const botMessages = [
        {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        }, {
            text: "This is just the demo",
            type: "message"
        },
    ]

    const createUserMessages = (label) => {
        return {
            label,
            isUserSend: true,
        }
    }

    const createBotMessages = () => {
        return {
            label: botMessages[index].text,
            isUserSend: false,
            type: botMessages[index].type,
        }
    }

    const sendMessage = (text) => {
        if (text.length >= 1) setMessages([createBotMessages(), createUserMessages(text), ...messages]) 
        setIndex(index + 1)
    }
    
    return (
        <div
            className={styles.asideChat}
            ref={chatRef}
            style={{
                transform: `translateX(${isOpened ? '0' : '100%'})`,
            }}
        >

            <AsideButton isOpened={isOpened} setIsOpened={setIsOpened} chatRef={chatRef} />
            <AsideChatWindow messages={messages} />
            <AsideMessageInput sendMessage={sendMessage} />
        </div>
    )
}
