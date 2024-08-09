import React, { useState, useEffect, useRef } from 'react';
import Loader from '../Loader';
import api from '../../../../../service/api';
import ChatTable from '../../ChatTable';
export default function BotMessage({ text, time, enableSubmit, chatId, setChatId, disable, currentStyles }) {
  const [displayText, setDisplayText] = useState('');
  const [courseData, setCourseData] = useState({});
  const [isCourse, setIsCourse] = useState(false)
  const [textBot, setTextBot] = useState('');

  const loader = <Loader />;
  const hasTyped = useRef(false);
  const data = {
    "Введение в курс": [
      "Обзор курса",
      "Цели и структура курса"
    ],
    "Основы fetch API": [
      "Синтаксис и структура fetch: Основные элементы fetch: Request, Response, Headers",
      "Синтаксис и структура fetch: Создание простого GET-запроса",
      "Синтаксис и структура fetch: Создание простого POST-запроса с телом запроса",
      "GET, POST, PUT и DELETE запросы: GET-запросы: получение данных",
      "GET, POST, PUT и DELETE запросы: POST-запросы: отправка данных",
      "GET, POST, PUT и DELETE запросы: PUT-запросы: обновление данных",
      "GET, POST, PUT и DELETE запросы: DELETE-запросы: удаление данных",
      "Обработка ошибок в fetch: Использование блока try-catch",
      "Обработка ошибок в fetch: Обработка сетевых ошибок",
      "Обработка ошибок в fetch: Обработка ошибок HTTP"
    ],
    "Продвинутые техники работы с fetch API": [
      "Работа с заголовками и токенами аутентификации: Добавление заголовков к запросу",
      "Работа с заголовками и токенами аутентификации: Использование Bearer-токена для аутентификации",
      "Работа с заголовками и токенами аутентификации: Обработка CORS (Cross-Origin Resource Sharing)",
      "Работа с JSON и форматом данных: Конвертация объектов JavaScript в JSON",
      "Работа с JSON и форматом данных: Парсинг JSON ответа",
      "Работа с JSON и форматом данных: Работа с другими форматами (например, FormData)",
      "Асинхронная работа и промисы в fetch: Создание асинхронных функций с использованием async/await",
      "Асинхронная работа и промисы в fetch: Работа с промисами: методы then и catch",
      "Асинхронная работа и промисы в fetch: Последовательное и параллельное выполнение запросов"
    ],
    "Основы работы с Axios": [
      "Установка и настройка Axios: Установка через npm или yarn",
      "Установка и настройка Axios: Создание базовой конфигурации Axios",
      "Установка и настройка Axios: Создание экземпляра Axios с пользовательскими настройками",
      "Основные методы и синтаксис Axios: Выполнение GET-запросов с Axios",
      "Основные методы и синтаксис Axios: Выполнение POST-запросов с Axios",
      "Основные методы и синтаксис Axios: Конфигурация запросов (заголовки, параметры и т.д.)"
    ],
    "Глубокое изучение Axios": [
      "Обработка запросов и ответов: Интерпретация структуры ответа от сервера",
      "Обработка запросов и ответов: Работа с данными ответа (res.data)",
      "Обработка запросов и ответов: Работа со статусами ответа (res.status)",
      "Работа с интерсепторами: Что такое интерсепторы и зачем они нужны",
      "Работа с интерсепторами: Создание интерсепторов для запросов",
      "Работа с интерсепторами: Создание интерсепторов для ответов",
      "Аутентификация с помощью Axios: Использование токенов для аутентификации",
      "Аутентификация с помощью Axios: Обновление токенов и повторная отправка запросов",
      "Аутентификация с помощью Axios: Примеры аутентификации на основе JWT",
      "Обработка ошибок: Обработка сетевых ошибок с помощью interceptors",
      "Обработка ошибок: Обработка HTTP ошибок с использованием response.status",
      "Обработка ошибок: Настройка пользовательских обработчиков ошибок",
      "Отправка и получение JSON данных: Конвертация объектов JavaScript в JSON при отправке запросов",
      "Отправка и получение JSON данных: Парсинг JSON при получении данных",
      "Отправка и получение JSON данных: Работа с другими форматами данных при использовании Axios (например, FormData)"
    ],
    "Советы и лучшие практики интеграции фронтенда и бэкенда": [
      "Рекомендации по организации кода: Принципы модульного кода",
      "Рекомендации по организации кода: Разделение логики запросов на сервисы",
      "Оптимизация производительности: Кэширование ответов для снижения нагрузки на сервер",
      "Оптимизация производительности: Декоративные методы для оптимизации выполнения запросов",
      "Безопасность данных: Защита от XSS и CSRF атак",


      "Безопасность данных: Работа с безопасными соединениями (HTTPS)",
      "Примеры интеграции фронтенда с бэкендом: Примеры использования fetch и Axios в одном проекте",
      "Примеры интеграции фронтенда с бэкендом: Использование React/Redux вместе с Axios для управления состоянием"
    ],
    "Заключение": [
      "Обзор пройденного материала",
      "Ресурсы для дальнейшего изучения"
    ]
  }
  useEffect(() => {
    if (!hasTyped.current) {
      console.log(chatId)
      hasTyped.current = true;
      if (disable == true) {
        setTextBot(text)
      } else {
        const waitMessage = async () => {
          setDisplayText(loader);
          try {
            console.log(text);
            const response = await api.chat(chatId, JSON.stringify({ message: text }), waitMessage);
            console.log(response);
            if (response.plan) {
              setCourseData(response.plan)
              setIsCourse(true)
            } else {
              setChatId(response.chatId);
              setTextBot(response.answer);
            }

          } catch (error) {
            console.error('Error during fetching bot message', error);
          }
        };
        waitMessage();
      }
    }
  }, []);

  useEffect(() => {
    if (textBot) {
      typeMachine();
    }
  }, [textBot]);

  const typeMachine = () => {
    setDisplayText(textBot[0]);
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + textBot[index]);
      index += 1;
      if (index === textBot.length - 1) {
        enableSubmit();
        clearInterval(interval);
      }
    }, time / textBot.length);
  };

  return (
    <>
      {isCourse ? <ChatTable data={courseData} /> :
        <div className={currentStyles && currentStyles.join(' ')}>
          <span>{displayText}</span>
        </div>
      }
    </>
  )
  //return(<ChatTable data={data} />)
}
