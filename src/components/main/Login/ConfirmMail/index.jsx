import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../../../../service/api'
export default function ConfirmMail() {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const OnPageLoad = async () => {
            console.log(token)
            try {
                const response = await api.confirmEmail(JSON.stringify({confirmationToken:token}))
                Cookies.set('user', JSON.stringify(response.data), { expires: 7 });
                // Обработка успешного входа
            } catch (error) {
                console.log(error)
                //console.error('Ошибка при входе', error);
            }
        }
        OnPageLoad()
        // fetch("http://localhost:3001/auth/confirm-email", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({confirmationToken:token})
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error('Request failed!');    
        //     } 
        //     return response.json(); 
            
        // })
        // .then(data => {
        //     //navigate(`/login`);
        //     console.log(data)
        //     Cookies.set('user', JSON.stringify(data), { expires: 7 });
            
        // })
        // .catch(error => {
        //     console.log('Error activating account.');
        //     console.error('Error:', error);
        // });
        
    }, [token]);

    return (
        <div>
        </div>
    )
}
