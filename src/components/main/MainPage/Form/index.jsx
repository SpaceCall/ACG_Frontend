import React, { useState } from 'react';
import axios from 'axios';
import styles from './form.module.scss';

export default function Form() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/add-email', { email });
      setMessage(response.data.message);
      // Очистка поля ввода после успешной отправки
    } catch (error) {
      // Обработка ошибок
      if (error.response) {
        // Ошибка с ответом от сервера
        setMessage(error.response.data.error || 'Произошла ошибка при отправке запроса.');
      } else if (error.request) {
        // Запрос был сделан, но не получен ответ
        setMessage('Произошла ошибка при ожидании ответа от сервера.');
      } else {
        // Ошибка настройки запроса
        setMessage('Произошла ошибка при настройке запроса.');
      }
    }
    setEmail('');
  };

  return (
    <div id='form' className={styles.form}>
      <div className="container">
        <h2>Join the ACG Community</h2>
        <p>
          Become a part of the <span>ACG</span> community and gain access to personalized learning like never before. Sign up
          now to start your journey toward knowledge, growth, and success.
        </p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" value={email} onChange={handleInputChange} />
          <button type="submit" >Send</button>
        </form>
      </div>
    </div>
  );
}
//{message && <p>{message}</p>}
