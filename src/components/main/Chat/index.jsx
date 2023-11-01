import React, { useState } from 'react'
import MessageInput from './MessageInput'
import styles from './chat.module.scss'
import ChatWindow from './ChatWindow'

export default function Chat() {
    const [messages,setMessages] = useState([])
    function createTodoItem(label) {
        return {
            label,
            isUserSend:true,
        }
    }
    const sendMassage = (text) =>{ if(text.length >= 1) setMessages([...messages,createTodoItem(text)]) }
    return (
        <div className={styles.chat}>
            <ChatWindow messages={messages}/>
            <MessageInput sendMassage={sendMassage}/>
        </div>
        
    )
}
