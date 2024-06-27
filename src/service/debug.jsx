import React, { useState } from 'react'
import api from './api';
import Cookies from 'js-cookie';
import config from './config.json'
export default function Debug({  }) {
    
    
    const test = async (text) => {
        fetch(`http://${config[0].Server}/auth/refresh-access`, {
            method: 'POST',
            credentials: 'include',
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
