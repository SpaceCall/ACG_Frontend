import React, { useState } from 'react'
import api from '../../../../service/api'
import Cookies from 'js-cookie';
import EmailInput from '../inputs/EmailInput';
export default function ForgotModal({ styles, onClose, errors }) {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const forgotPasswod = async (e) => {
        e.preventDefault()
        try {
            const response = await api.forgotPassword({ "email": email })
            Cookies.set('reset', JSON.stringify(response), { expires: 7 });
            Cookies.get('reset')
        } catch (error) {
            if (error.response.status === 404) {
                setError('Email is not registered')
            }
            console.error('Ошибка при входе', error);
        }
    }

    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <h2>Forgot password? No worries</h2>
                            <p>We'll email you reset instructions</p>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <form onSubmit={forgotPasswod}>
                            <EmailInput
                                styles={styles}
                                email={email}
                                setEmail={setEmail}
                                errors={errors.email} />
                            <button type="submit" className={styles.welcome__modal__body__btn}>Send</button>
                        </form>
                        <span className={styles.welcome__modal__body__remember}>Remember password?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
