import React, { useEffect } from 'react'
import styles from './chatWindow.module.scss'

export default function ChatWindow({messages}) {
    const elements = messages.map((item,id) => {
        return (
          <p key={id} className={`${styles.chatWindow__message} ${styles.chatWindow__personMessage}`}>{item.label}</p>
        );
      });
      useEffect (() =>{
        window.scroll(0,9999999)
      },[messages])
    return (
        <div className={styles.chatWindow}>
           {elements}
        </div>
    )
}
