import React, { useEffect, useRef } from 'react'
import styles from './chatWindow.module.scss'

export default function ChatWindow({ messages }) {
  const chatRef = useRef(null)

  useEffect(() => {
    const chatWindow = chatRef.current
    if (chatWindow && messages.length > 0) {
      const lastMessage = chatWindow.lastElementChild
      lastMessage.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div className={styles.chatWindow} ref={chatRef}>
      {messages.map((message, id) => (
        <p key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__personMessage}`}>
          {message.label}
        </p>
      ))}
    </div>
  )
}
