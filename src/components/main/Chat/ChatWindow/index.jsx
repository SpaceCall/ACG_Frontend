import React, { useEffect, useState } from 'react'
import styles from './chatWindow.module.scss'
import BotMessage from './BotMessage'
import ChatTable from '../ChatTable'
import ChatButtons from '../ChatButtons'

export default function ChatWindow({ messages,enableSubmit }) {
  const [displayTime, setDisplayTime] = useState('')
    const [renderedPage, setRenderedPage] = useState([])
  
    useEffect(() => {
        setDisplayTime(Math.ceil(Math.random() * (6000 - 3000) + 3000 ))

      // Создаем новый массив, объединяя messages.map(...) и текущий renderedPage
      const newRenderedPage = [
        ...messages.map((message) => {
          if (message.isUserSend === true) {
            return (
              <div key={message.id} className={`${styles.chatWindow__message} ${styles.chatWindow__personMessage}`}>
                <span>{message.label}</span>
              </div>
            )
          } else if (message.type === 'message') {
            return (
              <div key={message.id} className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>
                <BotMessage enableSubmit={enableSubmit} time={displayTime} text={message.label} />
              </div>
            )
          }else if (message.type === 'topic') {
            return (
              <div key={message.id} >
                <div className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>
                  <BotMessage enableSubmit={enableSubmit} text={message.label} time={displayTime}/>
                </div>
                <ChatTable text={message.label} time={displayTime*2}/>
              </div>
            )
          } else if (message.type === 'end') {
            return (
              <div key={message.id}>
                <div className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>
                  <BotMessage enableSubmit={enableSubmit}time={displayTime} text={message.label} />
                  </div>
                  <ChatButtons time={displayTime*2} text={message.label} />
              </div>
            )
          }
        }),
        ...renderedPage, // Добавляем текущий renderedPage после новых сообщений
      ]
      setRenderedPage(newRenderedPage)
    }, [messages])
  
    return (
      <div className={styles.chatWindow}>
        {renderedPage}
      </div>
    )
  }

