import React, { useEffect, useRef } from 'react'
import styles from './chatWindow.module.scss'
import BotMessage from './BotMessage'
import ChatTable from '../ChatTable'
import ChatButtons from '../ChatButtons'

export default function ChatWindow({ messages }) {
  const chatRef = useRef(null)

  useEffect(() => {
    const chatWindow = chatRef.current
    setTimeout(() => {
      if (chatWindow && messages.length > 0) {
        const lastMessage = chatWindow.lastElementChild
        lastMessage.scrollIntoView({ behavior: "smooth" })
      }
    }, 10)


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
        } else if (message.type === 'message') {
          return (
            <div key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}><BotMessage text={message.label} /></div>
          )
        } else if (message.type === 'topic') {
          return (
            <div>
              <div className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>
                <BotMessage text={message.label} />
              </div>
              <ChatTable text={message.label} />
            </div>
          )
        } else if (message.type === 'end') {
          return (
            <div><div className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}><BotMessage text={message.label} /></div><ChatButtons text={message.label} /></div>
          )
        }
      })}
    </div>
  )
}
