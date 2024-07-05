import React, { useState, useContext } from 'react'
import loginImg from '../../../assets/images/login/hi-there.png'
import ForgotModal from './forgotModal'
import CheckModal from './checkModal'
import SuccessModal from './successModal'
import ResetModal from './resetModal'
import styles from './styles/index.module.scss'
import Cookies from 'js-cookie';
import api from '../../../service/api'
import { LangContext } from '../../../context/Context';
import { useParams, useNavigate } from 'react-router-dom';
import PasswordInput from './inputs/PasswordInput'
import EmailInput from './inputs/EmailInput'
import { FormattedMessage } from 'react-intl';

export default function SignInPage({ toSignUp }) {
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isReset, setIsReset] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)

    const langContext = useContext(LangContext)
    const logined = () => langContext.setIsLogged(true)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()

        let errorMessages = { email: '', password: '' }

        // Custom validation logic can go here
        // if() errorMessages.password = 'Wrong password'
        // if() errorMessages.email = 'Account is not activated'

        if (!errorMessages.email && !errorMessages.password) {
            const data = {
                email: email,
                password: password
            }
            console.log(data)
            try {
                const response = await api.login(data)
                Cookies.set('user', JSON.stringify(response), { expires: 7 });
                logined()
                //setIsCheck(true)
                navigate(`/`);
                // Обработка успешного входа
            } catch (error) {
                if (error.response.status === 401) {
                    errorMessages.password = 'Wrong name or password.'
                } else if (error.response.status === 404) {
                    errorMessages.email = 'Email is not registered'
                }
                console.error('Ошибка при входе', error);
            }
        }
        setErrors(errorMessages)
    }

    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__wrapper}>
                <div className={styles.welcome__field}>
                    <div className={styles.welcome__field__header}>
                        <h2><FormattedMessage id='login.title'></FormattedMessage></h2>
                        <p><FormattedMessage id='login.subtitle'></FormattedMessage></p>
                    </div>
                    <div className={styles.welcome__field__body}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.welcome__field__body__or}><FormattedMessage id='login.or'></FormattedMessage></div>
                            <div className={styles.welcome__field__body__inputs}>
                                <EmailInput
                                    styles={styles}
                                    email={email}
                                    setEmail={setEmail}
                                    errors={errors.email} />
                                <PasswordInput
                                    styles={styles}
                                    setShow={setShowPassword}
                                    show={showPassword}
                                    password={password}
                                    setPassword={setPassword}
                                    errors={errors.password}
                                    label="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <button type="submit" className={styles.welcome__field__footer__loginBtn}>Log in</button>
                        </form>
                    </div>
                    <div className={styles.welcome__field__footer}>
                        <div className={styles.welcome__field__footer__forgot} onClick={() => setIsForgotPassword(true)}><FormattedMessage id='login.forgot'></FormattedMessage></div>
                        <div className={styles.welcome__field__footer__signUp}>
                            <span><FormattedMessage id='login.haveTheAcc'></FormattedMessage></span>
                            <a href='signup'>Sign up</a>
                        </div>
                    </div>
                </div>
                <div className={styles.welcome__image}>
                    <img src={loginImg} alt="Hi There" />
                </div>
            </div>
            {isForgotPassword && <ForgotModal styles={styles} onClose={() => setIsForgotPassword(false)} />}
            {isCheck && <CheckModal styles={styles} onClose={() => setIsCheck(false)} />}
            {isSuccess && <SuccessModal styles={styles} onClose={() => setIsSuccess(false)} />}
            {isReset && <ResetModal styles={styles} onClose={() => setIsReset(false)} />}
        </div>
    )
}
