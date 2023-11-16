import React, { useState } from 'react';
import axios from 'axios';
import styles from './form.module.scss';
import config from './config.jsx'
export default function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [csrfToken, setCsrfToken] = useState('');

    // useEffect(() => {
    //   async function fetchCsrfToken() {
    //     try {
    //       const response = await axios.get(`http://${config.server.address}:${config.server.port}/csrf-token`);
    //       setCsrfToken(response.data.csrfToken);
    //     } catch (error) {
    //       console.error('Error fetching CSRF token:', error);
    //     }
    //   }
    //   fetchCsrfToken();
    // }, []);
  
    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const csrfResponse = await axios.get(`http://${config.server.address}/csrf-token`,{
          withCredentials: true, 
        });
        const csrfToken = csrfResponse.data.csrfToken;
        // Отправка запроса на сервер
        const response = await axios.post(
          `http://${config.server.address}/add-email`,
          { email },
          {
            headers: {
              'X-CSRF-TOKEN': csrfToken, 
            },
            withCredentials: true,
          }
        );
  
        // Обработка успешного ответа
        setMessage(response.data.message);
      } catch (error) {
        // Обработка ошибок
        if (error.response) {
          // Ошибка с ответом от сервера
          if (error.response.status === 400) {
            // В случае статуса 400 (Bad Request), игнорируем ошибку
            setMessage(error.response.data.error || 'Произошла ошибка при отправке запроса.');
          } else {
            // Другие ошибки с ответом от сервера
            setMessage('Произошла ошибка при отправке запроса.');
          }
        } else if (error.request) {
          // Запрос был сделан, но не получен ответ
          setMessage('Произошла ошибка при ожидании ответа от сервера.');
        } else {
          // Ошибка настройки запроса
          setMessage('Произошла ошибка при настройке запроса.');
        }
      }
  
      // Очистка поля ввода после отправки
      setEmail('');
    };
  

  return (
    <div id='form' className={styles.form}>
      <h2>Join the ACG Community</h2>
      <p>
        Become a part of the <span>ACG</span> community and gain access to personalized learning like never before. Sign up
        now to start your journey toward knowledge, growth, and success.
      </p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" value={email} onChange={handleInputChange} />
        <input type="hidden" name="_csrf" value={csrfToken} />
        <button type="submit" >Send</button>
      </form>
    </div>
  );
}
//{message && <p>{message}</p>}
