import React, { useState, useEffect } from 'react';
import styles from './chatButtons.module.scss';
import api from '../../../../service/api';
import Loader from '../ChatWindow/Loader';
import { Link } from 'react-router-dom';
export default function ChatButtons({ getChatId, missCourse }) {
  const [loading, setLoading] = useState(false);
  const [courseReady, setCourseReady] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [dots, setDots] = useState('');
  const [courseId, setCoureId] = useState('');
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [loading]);

  const generateCourse = async () => {
    console.log(getChatId());
    setLoading(true);
    try {
      const response = await api.generateCourse(getChatId());
      console.log(response);
      setCourseReady(true)
      setCoureId(response.courseId)
    } catch (error) {
      console.error('Error during fetching bot message', error);
    }
  };
  const miss = ()=>{
    missCourse()
    setDisabled(true)
  }
  if (disabled) {
    return null; // Ничего не рендерить, если disabled = true
  }
  const button = (
    <div className={styles.chatButtons}>
      <a className={styles.chatButtons__cancel} onClick={miss} >No, I want to change something</a>
      <a className={styles.chatButtons__confirm} onClick={generateCourse}>Yes, generate course</a>
    </div>
  );

  const loader = (
    <div className={styles.chatButtons}>
      <Loader />
      <span>Ожидайте конца генерации курса{dots}</span>
    </div>
  );
  const ready = (
    <div className={styles.chatButtons}>
      <Link to={`/topics/${courseId}`}>проейти на курс</Link>
    </div>
  );

  return (
    <div>{loading ? (courseReady ? ready : loader) : button}</div>
  )
  
}
