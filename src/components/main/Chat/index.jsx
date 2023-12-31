import React, { useState } from 'react'
import MessageInput from './MessageInput'
import ChatWindow from './ChatWindow'
import styles from './chat.module.scss'

export default function Chat() {
    const [messages, setMessages] = useState([])
    const [index, setIndex] = useState(0);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const botMessages = [
        {
            text:"This is just the demo",
            type:"message"
        },{
            text:"This is just the demo",
            type:"message"
        },{
            text:"This is just the demo",
            type:"topic"
        },{
            text:"This is just the demo",
            type:"end"
        } 
    ]

    const createUserMessages = (label) => {
        return {
            label,
            isUserSend: true,
            id:Date.now(),
        }
    }

    const createBotMessages = () => {
        return {
            label: botMessages[index].text,
            isUserSend: false,
            type: botMessages[index].type,
            id:Date.now()+1,
        }
    }

    const sendMessage = (text) => {
        if (text.length >= 1) {
            setIsSubmitDisabled(true);
            setMessages([createBotMessages(), createUserMessages(text)]) 
            setIndex(index + 1)
        }
    }
    const enableSubmit = () =>{
        setIsSubmitDisabled(false)
    }
    return (
        <div className={styles.chat}>
            <ChatWindow messages={messages}  enableSubmit={enableSubmit}/>
            <MessageInput sendMessage={sendMessage} isSubmitDisabled={isSubmitDisabled}/>
        </div>
    )
}
