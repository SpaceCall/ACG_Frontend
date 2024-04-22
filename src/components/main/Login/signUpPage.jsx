import React, { useState } from 'react'
import loginImg from '../../../assets/images/login/welcome.png'
import ForgotModal from './forgotModal'
import CheckModal from './checkModal'
import SuccessModal from './successModal'
import ResetModal from './resetModal'

export default function SignUpPage({ styles, toSignIn }) {
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isReset, setIsReset] = useState(false)

    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__wrapper}>
                <div className={styles.welcome__field}>
                    <div className={styles.welcome__field__header}>
                        <h2>Welcome!</h2>
                        <p>Welcome to the ACG</p>
                    </div>
                    <div className={styles.welcome__field__body}>
                        <div className={styles.welcome__field__body__or}>or</div>
                        <div className={styles.welcome__field__body__inputs}>
                            <div className={styles.welcome__field__body__name}>
                                <label>Name</label>
                                <input type="text" placeholder='Your name' />
                            </div>
                            <div className={styles.welcome__field__body__email}>
                                <label>Email</label>
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className={styles.welcome__field__body__password}>
                                <label>Password</label>
                                <input type="password" placeholder='Enter password' />
                            </div>
                            <div className={styles.welcome__field__body__passwordConf}>
                                <label>Confirm password</label>
                                <input type="password" placeholder='Must contain at least one letter and one number' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.welcome__field__footer}>
                        <div className={styles.welcome__field__footer__forgot} onClick={() => setIsForgotPassword(true)}>Forgot Password?</div>
                        <div className={styles.welcome__field__footer__loginBtn}>Log in</div>
                        <div className={styles.welcome__field__footer__signUp}>
                            <span>Already have an account? </span>
                            <span onClick={toSignIn}>Log In</span>
                        </div>
                    </div>
                </div>
                <div className={styles.welcome__image}>
                    <img src={loginImg} alt="Welcome" />
                </div>
            </div>
            {isForgotPassword && <ForgotModal styles={styles} onClose={() => setIsForgotPassword(false)} />}
            {isCheck && <CheckModal styles={styles} onClose={() => setIsCheck(false)} />}
            {isSuccess && <SuccessModal styles={styles} onClose={() => setIsSuccess(false)} />}
            {isReset && <ResetModal styles={styles} onClose={() => setIsReset(false)} />}
        </div>
    )
}
