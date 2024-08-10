import React, { useState, useEffect } from 'react'
import styles from './chatButtons.module.scss'
import api from '../../../../service/api';
export default function ChatButtons({ getChatId }) {
  const generateCourse = async () => {
    console.log(getChatId())
    try {
        const response = await api.generateCourse(getChatId());
        console.log(response);
    } catch (error) {
      console.error('Error during fetching bot message', error);
    }
  };
  const button = <div className={styles.chatButtons}>
    <a className={styles.chatButtons__cancel}>No, I want to change something</a>
    <a className={styles.chatButtons__confirm} onClick={generateCourse}>Yes, generate course</a>
  </div>

  return (
    <div>{button}</div>
  )
}
