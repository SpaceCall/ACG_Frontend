import React, { useState } from 'react'
import api from './api';
import Cookies from 'js-cookie';
import config from './config.json'
export default function Debug({  }) {
    const test = async (text) => {
        const cookie = Cookies.get('userToken');
        let user = ''
        if (cookie) {
            user = JSON.parse(cookie);
        }
        console.log(user)
        fetch("http://localhost:3001/chat/chats", {
            method: 'GET',
            credentials: "include", // Это правильно, если ваш сервер поддерживает куки или сессии
            headers: {
                'Authorization': `Bearer ${user.accessToken}`, // Заголовок Authorization должен быть с заглавной буквы
                'Content-Type': 'application/json' // Этот заголовок добавлен для совместимости
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed!')
            }
                return response.json()
            })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('Error:', error)
        })
    }
    return(<div onClick={test}>hello</div>)
}
