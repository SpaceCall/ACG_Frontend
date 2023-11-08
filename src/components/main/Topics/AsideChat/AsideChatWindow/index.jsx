import React, { useEffect, useRef, useState } from 'react'
import styles from './asideChatWindow.module.scss'
import BotMessage from '../../../Chat/ChatWindow/BotMessage'
export default function AsideChatWindow({ messages }) {
    const chatRef = useRef(null)
  const [displayTime, setDisplayTime] = useState('')
  useEffect(() => {
    const chatWindow = chatRef.current
    if (chatWindow && messages.length > 0) {
      const lastMessage = chatWindow.lastElementChild
      lastMessage.scrollIntoView({ behavior: 'smooth' })
    }
    setDisplayTime(Math.ceil(Math.random()*2000))
  }, [messages])

  return (
    <div className={styles.asideChatWindow} ref={chatRef}>
      {messages.map((message, id) => {
        if (message.isUserSend === true) {
          return (
            <p key={id} className={`${styles.asideChatWindow__message} ${styles.asideChatWindow__personMessage}`}>{message.label}</p>
          )
        } else if (message.type === 'message') {
          return (
            <div key={id} className={`${styles.asideChatWindow__message} ${styles.asideChatWindow__botMessage}`}><BotMessage time={displayTime} text={message.label} /></div>
          )
        }
      })}
    </div>
  )
}
