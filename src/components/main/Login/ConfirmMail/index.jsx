import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function ConfirmMail() {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token)
        fetch("http://localhost:3001/auth/confirm-email", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({confirmationToken:token})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed!');    
            } 
            return response.json(); 
            
        })
        .then(data => {
            //navigate(`/login`);
            console.log(data)
            Cookies.set('user', JSON.stringify(data), { expires: 7 });
            
        })
        .catch(error => {
            console.log('Error activating account.');
            console.error('Error:', error);
        });
        
    }, [token]);

    return (
        <div>
        </div>
    )
}
