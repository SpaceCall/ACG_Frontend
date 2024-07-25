import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../../../../service/api'
import ResetModal from '../modals/resetModal';

export default function ConfirmMail() {
    const { token } = useParams();
    const navigate = useNavigate();
    const OnPageLoad = async () => {
        console.log(token)
        try {
            const response = await api.confirmEmail({})
            Cookies.set('user', JSON.stringify(response.data), { expires: 7 });
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div>
            <ResetModal/>
        </div>
    )
}
