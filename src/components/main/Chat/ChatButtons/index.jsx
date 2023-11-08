import React, { useState, useEffect } from 'react'
import styles from './chatButtons.module.scss'
import { NavLink } from 'react-router-dom'

export default function ChatButtons({time}) {

    const [displayContent, setDisplayContent] = useState('')
    const button = <div className={styles.chatButtons}>
    <button className={styles.chatButtons__cancel}>
        <span>No, I want to change something</span>
    </button>
    <button className={styles.chatButtons__confirm}>
        <NavLink to={"/topics"}>Yes, generate course</NavLink>
    </button>
</div>
    useEffect(() => {
        setDisplayContent('')
      const timer = setTimeout(() => {
        setDisplayContent(button)
      },time)
      return () => {
        clearTimeout(timer)
      }
    }, [])
    return (
        <div >{displayContent}</div>
    )
}
