import React, { useState } from 'react'
import loginImg from '../../../assets/images/login/welcome.png'
import ForgotModal from './forgotModal'
import CheckModal from './checkModal'
import SuccessModal from './successModal'
import ResetModal from './resetModal'
import styles from './styles/index.module.scss'
import IsExistModal from './isExistModal'
import visibleEye from '../../../assets/icons/visible-eye.svg'
import invisibleEye from '../../../assets/icons/invisible-eye.svg'

import Cookies from 'js-cookie';
import api from '../../../service/api'
export default function SignUpPage() {
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isReset, setIsReset] = useState(false)
    const [isExists, setIsExists] = useState(false)
    const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfPassword, setShowConfPassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let errorMessages = { name: '', email: '', password: '', confirmPassword: '' }
        const uppercasePattern = /[A-Z]/

        if (password.length < 8) errorMessages.password += 'Password must contain at least 8 characters. '
        if (!uppercasePattern.test(password)) errorMessages.password += 'Password must contain at least one uppercase letter. '
        if (password !== confirmPassword) errorMessages.confirmPassword = 'Passwords do not match.'
        if (name.length < 3) errorMessages.name = 'Name must contain at least 3 characters.'

        

        if (!errorMessages.password && !errorMessages.confirmPassword && !errorMessages.name) {
            const data = {
                email: email,
                name: name,
                password1: password,
                password2: confirmPassword
            }
            console.log(data)
            try {
                const response = await api.register(data)
                setIsSuccess(true)
                Cookies.set('user', JSON.stringify(response), { expires: 7 });
                // Обработка успешного входа
            } catch (error) {
                if(error.response.status === 409){
                    console.log('asdasdasdas')
                    errorMessages.email = 'The mail is already in use.'
                }
                console.error('Ошибка при входе', );
            }

        }
        setErrors(errorMessages)
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const toggleShowConfPassword = () => {
        setShowConfPassword(!showConfPassword)
    }

    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__wrapper}>
                <div className={styles.welcome__field}>
                    <div className={styles.welcome__field__header}>
                        <h2>Welcome!</h2>
                        <p>Welcome to the ACG</p>
                    </div>
                    <div className={styles.welcome__field__body}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.welcome__field__body__or}>or</div>
                            <div className={styles.welcome__field__body__inputs}>
                                <div className={styles.welcome__field__body__name}>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        placeholder='Your name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className={errors.name ? styles.inputError : ''}
                                    />
                                </div>
                                {errors.name && (
                                    <div className={styles.error}>
                                        <span>{errors.name}</span>
                                    </div>
                                )}
                                <div className={styles.welcome__field__body__email}>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={errors.email ? styles.inputError : ''}
                                    />
                                </div>
                                {errors.email && (
                                    <div className={styles.error}>
                                        <span>{errors.email}</span>
                                    </div>
                                )}
                                <div className={styles.welcome__field__body__password}>
                                    <label>Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Enter password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={errors.password ? styles.inputError : ''}
                                    />
                                    <img
                                        src={showPassword ? visibleEye : invisibleEye}
                                        alt=''
                                        onClick={toggleShowPassword}
                                    />
                                    {errors.password && (
                                        <div className={styles.error}>
                                            <span>{errors.password}</span>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.welcome__field__body__passwordConf}>
                                    <label>Confirm password</label>
                                    <input
                                        type={showConfPassword ? "text" : "password"}
                                        placeholder='Must contain at least one letter and one number'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className={errors.confirmPassword ? styles.inputError : ''}
                                    />
                                    <img
                                        src={showConfPassword ? visibleEye : invisibleEye}
                                        alt=''
                                        onClick={toggleShowConfPassword}
                                    />
                                    {errors.confirmPassword && (
                                        <div className={styles.error}>
                                            <span>{errors.confirmPassword}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button type="submit" className={styles.welcome__field__footer__loginBtn}>Sign Up</button>
                        </form>
                    </div>
                    <div className={styles.welcome__field__footer}>
                        <div className={styles.welcome__field__footer__forgot} onClick={() => setIsForgotPassword(true)}>Forgot Password?</div>
                        <div className={styles.welcome__field__footer__signUp}>
                            <span>Already have an account? </span>
                            <a href='signIn'>Log In</a>
                        </div>
                    </div>
                </div>
                <div className={styles.welcome__image}>
                    <img src={loginImg} alt="Welcome" />
                </div>
            </div>
            {isForgotPassword && <ForgotModal styles={styles} onClose={() => setIsForgotPassword(false)} />}
            {isCheck && <CheckModal styles={styles} onClose={() => setIsCheck(false)} />}
            {isSuccess && <SuccessModal userEmail={email} styles={styles} onClose={() => setIsSuccess(false)} />}
            {isReset && <ResetModal styles={styles} onClose={() => setIsReset(false)} />}
            {isExists && <IsExistModal styles={styles} onClose={() => setIsExists(false)} />}
        </div>
    )
}
