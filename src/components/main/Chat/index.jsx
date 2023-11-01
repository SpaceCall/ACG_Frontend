import React, { useState } from 'react'
import MessageInput from './MessageInput'
import styles from './chat.module.scss'
import ChatWindow from './ChatWindow'

export default function Chat() {
    const [messages,setMessages] = useState([])
    const [index,setIndex] = useState(0);
    const botMessages = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17']
    function createUserMessages(label) {
        return {
            label,
            isUserSend:true,
        }
    }
    function createBotMessages() {
        return {
            label:botMessages[index],
            isUserSend:false,
        }
    }
    const sendMassage = (text) =>{ if(text.length >= 1) setMessages([...messages,createUserMessages(text),createBotMessages()]);setIndex(index + 1) }
    return (
        <div className={styles.chat}>
            <ChatWindow messages={messages}/>
            <MessageInput sendMassage={sendMassage}/>
        </div>
        
    )
}
