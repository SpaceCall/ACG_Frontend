import React, { useState } from 'react'
import api from '../../../../../service/api'
import Cookies from 'js-cookie';
import EmailInput from '../../inputs/EmailInput';
import { FormattedMessage } from 'react-intl';
import CurrentModal from '../CurrentModal';
export default function ForgotModal({ styles, onClose, errors = {} }) {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const [showed, setShowed] = useState(false)

    const forgotPasswod = async (e) => {
        e.preventDefault()
        setShowed(true)
        try {
            const response = await api.forgotPassword({ "email": email },forgotPasswod)
        } catch (error) {
            setError('пипипупупу')
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
                            <h2><FormattedMessage id='modals.forgot.header.title'></FormattedMessage></h2>
                            <p><FormattedMessage id='modals.forgot.header.subtitle'></FormattedMessage></p>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <form onSubmit={forgotPasswod}>
                            <EmailInput
                                styles={styles}
                                email={email}
                                setEmail={setEmail}
                                errors={error.email} />
                            <button type="submit" className={styles.welcome__modal__body__btn}><FormattedMessage id='modals.forgot.send'></FormattedMessage></button>
                        </form>
                    </div>
                    {showed && <CurrentModal userEmail={email} modalType={"check"} styles={styles} onClose={() => setShowed(false)} errors={error} />}
                </div>
            </div>
        </div>
    )
}
