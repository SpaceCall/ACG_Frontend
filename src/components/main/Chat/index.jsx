import React, { useEffect, useState } from 'react'
import MessageInput from './MessageInput'
import ChatWindow from './ChatWindow'
import styles from './chat.module.scss'

export default function Chat() {
    const [messages, setMessages] = useState([{
        label: "Hello there! I'm here to create the perfect course just for you. To get started, I'd love to learn more about your preferences, including the course goal, your experience, and any specific wishes you have. Feel free to share, and we'll tailor the course to match your needs!",
        isUserSend: false,
        type: 'message',
        id:Date.now()+1,
        isFirst:true,
      }])
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [chatId, setChatId] = useState(null)
    
    const createUserMessages = (label) => {
        return {
            label,
            isUserSend: true,
            id:Date.now(),
        }
    }

    const createBotMessages = (text) => {
        return {
            label: text,
            isUserSend: false,
            type: "message",
            id:Date.now()+1,
        }
    }
 
    const  sendMessage = (text) => {
        if (text.length >= 1) {
            setIsSubmitDisabled(true);
            setMessages([createBotMessages(text),createUserMessages(text)]) 
        }
    }
    const enableSubmit = () =>{
        setIsSubmitDisabled(false)
    }
    return (
        <div className={styles.chat}>
            <ChatWindow messages={messages}  enableSubmit={enableSubmit} chatId={chatId} setChatId={setChatId} />
            <MessageInput sendMessage={sendMessage} isSubmitDisabled={isSubmitDisabled}/>
        </div>
    )
}
