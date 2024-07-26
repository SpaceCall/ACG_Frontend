import React, { useContext, useState } from 'react'
import loginImg from '../../../assets/images/login/welcome.png'
import styles from './styles/index.module.scss'
import PasswordInput from './inputs/PasswordInput'
import CurrentModal from './modals/CurrentModal';
import EmailInput from './inputs/EmailInput'
import NameInput from './inputs/NameInput'
import Cookies from 'js-cookie';
import api from '../../../service/api'
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../../../context/Context.js'

export default function SignUpPage() {
    const [modalType, setModalType] = useState(null);
    const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfPassword, setShowConfPassword] = useState(false)

    const langContext = useContext(LangContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let errorMessages = { name: '', email: '', password: '', confirmPassword: '' }
        const uppercasePattern = /[A-Z]/

        if (password.length < 8) {
            langContext && langContext.activeLang === 'en' ? errorMessages.password += 'Password must contain at least 8 characters.' : errorMessages.password += 'Пароль має містити, як мінімум, 8 символів.'
        }
        if (!uppercasePattern.test(password)) {
            langContext && langContext.activeLang === 'en' ? errorMessages.password += 'Password must contain at least one uppercase letter.' : errorMessages.password += 'Пароль має містити, як мінімум, 1 заглавну літеру.'
        }
        if (password !== confirmPassword) {
            langContext && langContext.activeLang === 'en' ? errorMessages.confirmPassword = 'Passwords do not match.' : errorMessages.confirmPassword += 'Паролі не співпадають.'
        }
        if (name.length < 3) {
            langContext && langContext.activeLang === 'en' ? errorMessages.name = 'Name must contain at least 3 characters.' : errorMessages.name += "Ім'я має містити, як мінімум, 3 символи."
        }

        if (!errorMessages.password && !errorMessages.confirmPassword && !errorMessages.name) {
            const data = {
                email: email,
                username: name,
                password1: password,
                password2: confirmPassword
            }
            console.log(data)
            try {
                const response = await api.register(data)
                setModalType('success')
                Cookies.set('user', JSON.stringify(response), { expires: 7 });
                // Обработка успешного входа
            } catch (error) {
                if (error.response.status === 409) {
                    console.log('asdasdasdas')
                    errorMessages.email = 'The mail is already in use.'
                }
                console.error('Ошибка при входе',);
            }

        }
        setErrors(errorMessages)
    }

    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__wrapper}>
                <div className={styles.welcome__field}>
                    <div className={styles.welcome__field__header}>
                        <h2><FormattedMessage id='signUp.title'></FormattedMessage></h2>
                        <p><FormattedMessage id='signUp.subtitle'></FormattedMessage></p>
                    </div>
                    <div className={styles.welcome__field__body}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.welcome__field__body__or}><FormattedMessage id='signUp.or'></FormattedMessage></div>
                            <div className={styles.welcome__field__body__inputs}>
                                <NameInput
                                    styles={styles}
                                    name={name}
                                    setName={setName}
                                    errors={errors.name} />
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
                                    label={langContext.activeLang === 'en' ? 'Password' : 'Пароль'}
                                    placeholder={langContext.activeLang === 'en' ? 'Password' : 'Пароль'}
                                />
                                <PasswordInput
                                    styles={styles}
                                    setShow={setShowConfPassword}
                                    show={showConfPassword}
                                    password={confirmPassword}
                                    setPassword={setConfirmPassword}
                                    errors={errors.confirmPassword}
                                    label={langContext.activeLang === 'en' ? 'Confirm Password' : 'Підтвердити Пароль'}
                                    placeholder={langContext.activeLang === 'en' ? 'Confirm Password' : 'Підтвердити Пароль'}
                                />
                            </div>
                            <button type="submit" className={styles.welcome__field__footer__loginBtn}><FormattedMessage id='signUp'></FormattedMessage></button>
                        </form>
                    </div>
                    <div className={styles.welcome__field__footer}>
                        <div className={styles.welcome__field__footer__signUp}>
                            <span><FormattedMessage id='signUp.haveTheAcc'></FormattedMessage></span>
                            <a href='signIn'><FormattedMessage id='signIn'></FormattedMessage></a>
                        </div>
                    </div>
                </div>
                <div className={styles.welcome__image}>
                    <img src={loginImg} alt="Welcome" />
                </div>
            </div>
            {modalType && <CurrentModal modalType={modalType} styles={styles} onClose={() => setModalType(null)} errors={errors} />}
        </div>
    )
}
