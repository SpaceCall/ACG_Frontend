import React, { useEffect, useState } from 'react'
import styles from './asideChatWindow.module.scss'
import BotMessage from '../../../Chat/ChatWindow/BotMessage'
export default function AsideChatWindow({ messages,enableSubmit }) {
    const [displayTime, setDisplayTime] = useState('')
    const [renderedPage, setRenderedPage] = useState([])
  
    useEffect(() => {
      setDisplayTime(Math.ceil(Math.random() * 2000))
      const newRenderedPage = [
        ...messages.map((message) => {
          if (message.isUserSend === true) {
            return (
              <div key={message.id} className={`${styles.asideChatWindow__message} ${styles.asideChatWindow__personMessage}`}>
                <span>{message.label}</span>
              </div>
            )
          } else if (message.type === 'message') {
            return (
              <div key={message.id} className={`${styles.asideChatWindow__message} ${styles.asideChatWindow__botMessage}`}>
                <BotMessage enableSubmit={enableSubmit} time={displayTime} text={message.label} />
              </div>
            )
          }
        }),
        ...renderedPage, // Добавляем текущий renderedPage после новых сообщений
      ]
      setRenderedPage(newRenderedPage)
    }, [messages])
  
    return (
      <div className={styles.asideChatWindow}>
        {renderedPage}
      </div>
    )
  }
  
