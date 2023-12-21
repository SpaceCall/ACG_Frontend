import React, { useEffect, useState } from 'react'
import MessageInput from './MessageInput'
import ChatWindow from './ChatWindow'
import styles from './chat.module.scss'

export default function Chat() {
    const [messages, setMessages] = useState([{
        label: "Hello there! I'm here to create the perfect course just for you. To get started, I'd love to learn more about your preferences, including the course goal, your experience, and any specific wishes you have. Feel free to share, and we'll tailor the course to match your needs!",
        isUserSend: false,
        type: 'message',
        id:Date.now()+1
      }])
    const [index, setIndex] = useState(0);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const botMessages = [
        {
            text:"Perhaps you'd like to get additional knowledge in Python in the process of passing?",
            type:"message"
        },{
            text:"Alright! It would be helpful to know if you already have some knowledge in this or related areas and any specific preferences you have. The more you share, the better we can tailor the course to your needs!",
            type:"message"
        },{
            text:"Fantastic! This information will be very helpful. Are you ready for us to start generating a course plan, or is there anything else you'd like to add?",
            type:"message"
        },{
            text:"Take a look at the generated course",
            type:"topic"
        },{
            text:"Can we start?",
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
