import React, { useState } from 'react'
import styles from './styles/index.module.scss'
import loginImg from '../../../assets/images/login/hi-there.png'
import ForgotModal from './forgotModal'
import CheckModal from './checkModal'

export default function Login() {
    // const [isForLogin, setIsForLogin] = useState(true)
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    return (
        <div className={styles.login}>
            <div className={styles.login__wrapper}>
                <div className={styles.login__field}>
                    <div className={styles.login__field__header}>
                        <h2>Hi There!</h2>
                        <p>Welcome to the ACG</p>
                    </div>
                    <div className={styles.login__field__body}>
                        <div className={styles.login__field__body__google}>idi nahuy</div>
                        <div className={styles.login__field__body__or}>or</div>
                        <div className={styles.login__field__body__email}>
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className={styles.login__field__body__password}>
                            <label>Password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <div className={styles.login__field__footer}>
                        <div className={styles.login__field__footer__forgot}  onClick={() => setIsForgotPassword(true)}>Forgot Password?</div>
                        <div className={styles.login__field__footer__loginBtn}>Log in</div>
                        <div className={styles.login__field__footer__signUp}>
                            <span>Don't have an account? </span>
                            <span>Sign Up</span>
                        </div>
                    </div>
                </div>
                <div className={styles.login__image}>
                    <img src={loginImg} alt="Hi There" />
                </div>
            </div>
            {isForgotPassword && <ForgotModal styles={styles} onClose={() => setIsForgotPassword(false)} />}
            {isCheck && <CheckModal styles={styles} onClose={() => setIsCheck(false)} />}
        </div>
    )
}
