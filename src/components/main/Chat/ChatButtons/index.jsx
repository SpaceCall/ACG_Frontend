import React, { useState, useEffect } from 'react'
import styles from './chatButtons.module.scss'
import { NavLink } from 'react-router-dom'

export default function ChatButtons({ time }) {

  const [displayContent, setDisplayContent] = useState('')
  const button = <div className={styles.chatButtons}>
    <a className={styles.chatButtons__cancel}>No, I want to change something</a>
    <NavLink to={"/topics"} className={styles.chatButtons__confirm}>Yes, generate course</NavLink>
  </div>
  useEffect(() => {
    setDisplayContent('')
    const timer = setTimeout(() => {
      setDisplayContent(button)
    }, time)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <div>{displayContent}</div>
  )
}
