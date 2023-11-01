import React, { useEffect } from 'react'
import styles from './chatWindow.module.scss'

export default function ChatWindow({messages}) {
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
        <div className={styles.chatWindow}>
           {elements}
        </div>
    )
}
