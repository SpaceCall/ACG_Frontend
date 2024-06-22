import React, { useState } from 'react'
import loginImg from '../../../assets/images/login/hi-there.png'
import ForgotModal from './forgotModal'
import CheckModal from './checkModal'
import SuccessModal from './successModal'
import ResetModal from './resetModal'

export default function SignInPage({ styles, toSignUp }) {
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isReset, setIsReset] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function login(){
        const data ={
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
                    throw new Error('Request failed!');    
                } 
                return response.json(); 
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
                        <div className={styles.welcome__field__body__or}>or</div>
                        <div className={styles.welcome__field__body__inputs}>
                            <div className={styles.welcome__field__body__email}>
                                <label>Email</label>
                                <input type="email" 
                                        placeholder='Email' 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}  
                                    />
                            </div>
                            <div className={styles.welcome__field__body__password}>
                                <label>Password</label>
                                <input type="password" 
                                        placeholder='Enter password' 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        minLength = '8'
                                        />
                            </div>
                        </div>
                    </div>
                    <div className={styles.welcome__field__footer}>
                        <div className={styles.welcome__field__footer__forgot} onClick={() => setIsForgotPassword(true)}>Forgot Password?</div>
                        <div className={styles.welcome__field__footer__loginBtn} onClick={login}>Log in</div>
                        <div className={styles.welcome__field__footer__signUp}>
                            <span>Don't have an account? </span>
                            <span onClick={toSignUp}>Sign Up</span>
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
