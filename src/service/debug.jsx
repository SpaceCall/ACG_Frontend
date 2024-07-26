import React, { useState } from 'react'
import api from './api';
import Cookies from 'js-cookie';
import config from './config.json'
export default function Debug({  }) {
    const test = async (text) => {
        console.log(Cookies.get('user'))
        // fetch("http://localhost:3001/auth/refresh-access", {
        //     method: 'GET',
        //     credentials:"include",
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error('Request failed!')
        //     }
        //         return response.json()
        //     })
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(error => {
        //     console.error('Error:', error)
        // })
        //  fetch(`http://${config[0].Server}/courses/9902eef1-70b3-4419-bb85-3e2b9de80363`, {
        //     method: 'POST',
        //     credentials: 'include',
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error('Request failed!')
        //     }
        //         return response.json()
        //     })
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(error => {
        //     console.error('Error:', error)
        // })
    }
    return(<div onClick={test}>hello</div>)
}
