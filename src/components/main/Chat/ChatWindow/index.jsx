import React, { useEffect, useRef } from 'react'
import styles from './chatWindow.module.scss'
import BotMessage from './BotMessage'

export default function ChatWindow({ messages }) {
  const chatRef = useRef(null)

  useEffect(() => {
    const chatWindow = chatRef.current
    if (chatWindow && messages.length > 0) {
      const lastMessage = chatWindow.lastElementChild
      lastMessage.scrollIntoView({ behavior: 'smooth' })
    }

    const displayMessagesWithDelay = async () => await new Promise((resolve) => setTimeout(resolve, 1000))
    displayMessagesWithDelay()
  }, [messages])

  return (
    <div className={styles.chatWindow} ref={chatRef}>
      {messages.map((message, id) => {
        if (message.isUserSend === true) {
          return (
            <p key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__personMessage}`}>{message.label}</p>
          )
        }
        return (
          <div key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}><BotMessage text={message.label} /></div>
        )
      })}
    </div>
  )
}
