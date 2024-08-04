import React, { useEffect, useState, useRef } from 'react'
import styles from './chatWindow.module.scss'
import BotMessage from './BotMessage'
import ChatTable from '../ChatTable'
import ChatButtons from '../ChatButtons'
import arrow from './../../../../assets/icons/black_arrow_left.svg'

export default function ChatWindow({ messages, enableSubmit, chatId, setChatId }) {
  const [displayTime, setDisplayTime] = useState('')
  const [renderedPage, setRenderedPage] = useState([])
  const [showScrollButton, setShowScrollButton] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
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
              <div key={message.id} className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>
                <BotMessage enableSubmit={enableSubmit} text={message.label} disable={true} />
              </div>
            )
          }
          return (
            <div key={message.id} className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>
              <BotMessage enableSubmit={enableSubmit} text={message.label} chatId={chatId} setChatId={setChatId} />
            </div>
          )
        } else if (message.type === 'topic') {
          return (
            <div key={message.id} >
              <div className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>
                <BotMessage enableSubmit={enableSubmit} text={message.label} />
              </div>
              <ChatTable text={message.label} time={displayTime * 2} />
            </div>
          )
        } else if (message.type === 'end') {
          return (
            <div key={message.id}>
              <div className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>
                <BotMessage enableSubmit={enableSubmit} text={message.label} />
              </div>
              <ChatButtons time={displayTime * 2} text={message.label} />
            </div>
          )
        }
      }),
      ...renderedPage,
    ]
    setRenderedPage(newRenderedPage)
  }, [messages])

  useEffect(() => {
    const chatElement = chatRef.current
    const handleScroll = () => chatElement.scrollTop === 0 ? setShowScrollButton(false) : setShowScrollButton(true)
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
    <div ref={chatRef} className={styles.chatWindow}>
      {renderedPage}
      <ChatTable />
      <ChatButtons />
      {showScrollButton && (
        <button onClick={scrollToBottom} className={styles.chatWindow__toBottom}>
          <img src={arrow} alt="Down" />
        </button>
      )}
    </div>
  )
}
