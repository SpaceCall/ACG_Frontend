import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
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
            navigate(`/login`);
            console.log(data.message);
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
