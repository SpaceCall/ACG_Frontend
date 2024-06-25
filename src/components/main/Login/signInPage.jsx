import React, { useState } from 'react'
import loginImg from '../../../assets/images/login/hi-there.png'
import ForgotModal from './forgotModal'
import CheckModal from './checkModal'
import SuccessModal from './successModal'
import ResetModal from './resetModal'
import styles from './styles/index.module.scss'
import Cookies from 'js-cookie';
export default function SignInPage({ toSignUp }) {
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isReset, setIsReset] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        let errorMessages = { email: '', password: '' }

        // Custom validation logic can go here
        // if() errorMessages.password = 'Wrong password'
        // if() errorMessages.email = 'Account is not activated'

        setErrors(errorMessages)

        if (!errorMessages.email && !errorMessages.password) {
            const data = {
                email: email,
                password: password
            }
            console.log(data)
            fetch("http://localhost:3001/auth/sign-in", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Request failed!')
                    }
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    //setIsSuccess(true)
                    Cookies.set('user', JSON.stringify(data), { expires: 7 });
                })
                .catch(error => {
                    console.error('Error:', error)
                })
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__wrapper}>
                <div className={styles.welcome__field}>
                    <div className={styles.welcome__field__header}>
                        <h2>Hi There!</h2>
                        <p>Welcome to the ACG</p>
                    </div>
                    <div className={styles.welcome__field__body}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.welcome__field__body__or}>or</div>
                            <div className={styles.welcome__field__body__inputs}>
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
                                        placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={errors.password ? styles.inputError : ''}
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleShowPassword}
                                        className={styles.showPasswordBtn}
                                    >{showPassword ? "Hide" : "Show"}</button>
                                </div>
                                {errors.password && (
                                    <div className={styles.error}>
                                        <span>{errors.password}</span>
                                    </div>
                                )}
                            </div>
                            <button type="submit" className={styles.welcome__field__footer__loginBtn}>Log in</button>
                        </form>
                    </div>
                    <div className={styles.welcome__field__footer}>
                        <div className={styles.welcome__field__footer__forgot} onClick={() => setIsForgotPassword(true)}>Forgot Password?</div>
                        <div className={styles.welcome__field__footer__signUp}>
                            <span>Don't have an account? </span>
                            <a href='signup'>Sign Up</a>
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
