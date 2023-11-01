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
  const elements = messages.map((item,id) => {
    console.log(item.label)
    if(item.isUserSend === true){
        return (
        <p key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__personMessage}`}>{item.label}</p>
        );
    }else{
        return (
            <p key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>{
                setTimeout(()=>{
                return item.label
                },2)}
            </p>
        );
    }
  });
  return (
    <div className={styles.chatWindow} ref={chatRef}>
      {messages.map((message, id) => {
        if(message.isUserSend === true){
            return (
            <p key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__personMessage}`}>{message.label}</p>
            );
        }else{
            return (
                <p key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__botMessage}`}>{
                    setTimeout(()=>{
                    return message.label
                    },2)}
                </p>
            );
        }
      })}
    </div>
  )
}
