import React, { useEffect, useState, useRef } from 'react'
import styles from './chatWindow.module.scss'
import BotMessage from './BotMessage'
import ScrollToBottomButton from '../../../shared/ScrollToBottomButton'
import ChatButtons from '../ChatButtons'

export default function ChatWindow({ missCourse, messages, enableSubmit, chatId, setChatId }) {
  const [displayTime, setDisplayTime] = useState('')
  const [renderedPage, setRenderedPage] = useState([])
  const [showScrollButton, setShowScrollButton] = useState(false)
  const chatRef = useRef(null)
  const currentStyles = [
    styles.chatWindow__message,
    styles.chatWindow__botMessage
  ]
  
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
        } else if (message.type === 'message') {
          if (message.isFirst) {
            return (
              <BotMessage key={message.id} missCourse={missCourse} enableSubmit={enableSubmit} text={message.label} disable={message.disable} currentStyles={currentStyles} />
            )
          }
          return (
            <BotMessage key={message.id} missCourse={missCourse} enableSubmit={enableSubmit} text={message.label} disable={message.disable} chatId={chatId} setChatId={setChatId} currentStyles={currentStyles} />
          )
        }
      }),
      ...renderedPage, // Добавляем текущий renderedPage после новых сообщений
    ]
    setRenderedPage(newRenderedPage)
  }, [messages])

  useEffect(() => {
    const chatElement = chatRef.current
    const handleScroll = () => chatElement.scrollTop === 0 ? setShowScrollButton(false) : setShowScrollButton(true)
    if (chatElement) chatElement.addEventListener('scroll', handleScroll)
    return () => {
      if (chatElement) chatElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div ref={chatRef} className={styles.chatWindow}>
      {renderedPage}
      <ScrollToBottomButton show={showScrollButton} onClick={scrollToBottom} />
    </div>
  )
}

