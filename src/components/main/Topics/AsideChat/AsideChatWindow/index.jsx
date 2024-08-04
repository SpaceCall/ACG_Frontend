import React, { useEffect, useRef, useState } from 'react'
import styles from './asideChatWindow.module.scss'
import BotMessage from '../../../Chat/ChatWindow/BotMessage'
import ScrollToBottomButton from '../../../../shared/ScrollToBottomButton'
export default function AsideChatWindow({ messages, enableSubmit }) {
  const [displayTime, setDisplayTime] = useState('')
  const [renderedPage, setRenderedPage] = useState([])
  const [showScrollButton, setShowScrollButton] = useState(false)
  const chatRef = useRef(null)

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

  useEffect(() => {
    const chatElement = chatRef.current
    const handleScroll = () => chatElement.scrollTop > 0 ? setShowScrollButton(false) : setShowScrollButton(true)
    chatElement.addEventListener('scroll', handleScroll)
    return () => chatElement.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToBottom = () => {
    chatRef.current.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div ref={chatRef} className={styles.asideChatWindow}>
      {renderedPage}
      <ScrollToBottomButton show={showScrollButton} onClick={scrollToBottom} />
    </div>
  )
}

