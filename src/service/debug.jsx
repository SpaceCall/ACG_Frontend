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
        fetch("http://localhost:3001/courses/courses", {
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
    const test2 = async (text) => {
        const cookie = Cookies.get('userToken');
        let user = ''
        if (cookie) {
            user = JSON.parse(cookie);
        }
        console.log(user)
        fetch("http://localhost:3001/chat/generate/15e4c5eb-5e78-40a4-8b9d-5c6946068cf6", {
            method: 'POST',
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
    const test3 = async (text) => {
        const cookie = Cookies.get('userToken');
        let user = ''
        if (cookie) {
            user = JSON.parse(cookie);
        }
        console.log(user)
        fetch("http://localhost:3001/courses/69a04f9c-00f4-493c-b455-f64d4712a6db", {
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
    const test4 = async (text) => {
        const cookie = Cookies.get('userToken');
        let user = ''
        if (cookie) {
            user = JSON.parse(cookie);
        }
        console.log(user)
        fetch("http://localhost:3001/courses/topic/410af8d8-a26a-4766-b00d-3154b8d33e36", {
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
    const test5 = async (text) => {
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
    const test6 = async (text) => {
        const cookie = Cookies.get('userToken');
        let user = ''
        if (cookie) {
            user = JSON.parse(cookie);
        }
        console.log(user)
        fetch("http://localhost:3001/chat/67acfd3c-a414-46c6-b7d5-523615c6feb7", {
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
    return <div>
        <div onClick={test}>айди курсов</div>
        <div onClick={test2}>создай курс</div>
        <div onClick={test3}>дай курс</div>
        <div onClick={test4}>дай тему курсов</div>
        <div onClick={test5}>айди чатов</div>
        <div onClick={test6}>дай чат</div>
        </div>
}
