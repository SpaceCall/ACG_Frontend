import React, { useEffect, useState } from 'react'
import styles from './chatWindow.module.scss'
import BotMessage from './BotMessage'
import ChatTable from '../ChatTable'
import ChatButtons from '../ChatButtons'

export default function ChatWindow({ messages,enableSubmit,chatId,setChatId }) {
  const [displayTime, setDisplayTime] = useState('')
  const [renderedPage, setRenderedPage] = useState([])
  
    useEffect(() => {
        //setDisplayTime(Math.ceil(Math.random() * (3000 - 2000) + 2000 ))

      const newRenderedPage = [
        ...messages.map((message) => {
          if (message.isUserSend === true) {
            return (
              <div key={message.id} className={`${styles.chatWindow__message} ${styles.chatWindow__personMessage}`}>
                <span>{message.label}</span>
              </div>
            )
          }else if (message.type === 'message' ) {
            if(message.isFirst){
              return (
                <div key={message.id}>
                    <BotMessage enableSubmit={enableSubmit} text={message.label} disable={true}/>
                </div>
              )
            }
            return (
              <div key={message.id}>
                  <BotMessage enableSubmit={enableSubmit} text={message.label} chatId={chatId} setChatId={setChatId}/>
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

