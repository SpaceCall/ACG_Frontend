import React, { useState } from 'react'
import MessageInput from './MessageInput'
import styles from './chat.module.scss'
import ChatWindow from './ChatWindow'

export default function Chat() {
    const [messages, setMessages] = useState([])
    const [index, setIndex] = useState(0);
    const botMessages = [
        "This is just the demo", 
        "This is just the demo", 
        'This is just the demo',
        'This is just the demo',
        'This is just the demo',
        "This is just the demo", 
        "This is just the demo", 
        'This is just the demo',
        'This is just the demo',
        'This is just the demo',
        "This is just the demo", 
        "This is just the demo", 
        'This is just the demo',
        'This is just the demo',
        'This is just the demo',
    ]

    const createUserMessages = (label) => {
        return {
            label,
            isUserSend: true,
        }
    }

    const createBotMessages = () => {
        return {
            label: botMessages[index],
            isUserSend: false,
        }
    }

    const sendMessage = (text) => {
        if (text.length >= 1) setMessages([...messages, createUserMessages(text), createBotMessages()]); setIndex(index + 1)
    }

    return (
        <div className={styles.chat}>
            <ChatWindow messages={messages} />
            <MessageInput sendMessage={sendMessage} />
        </div>
    )
}
