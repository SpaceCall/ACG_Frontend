import React, { useState } from 'react'
import loginImg from '../../../assets/images/login/welcome.png'
import ForgotModal from './forgotModal'
import CheckModal from './checkModal'
import SuccessModal from './successModal'
import ResetModal from './resetModal'

export default function SignUpPage({ styles, toSignIn }) {
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isReset, setIsReset] = useState(false);

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    function submitForm() {
        if (!/[a-zA-Z]/.test(password1)) {
            setError('Password must contain at least one letter.');
            return;
        }

        if (password1 !== password2) {
            setError('Passwords do not match.');
            return;
        }

        const data = {
            email: email,
            name: name,
            password1: password1,
            password2: password2
        };
        console.log(data);
        fetch("http://localhost:3001/auth/sign-up", {
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
            setIsSuccess(true); // Set success state if needed
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
                        <h2>Welcome!</h2>
                        <p>Welcome to the ACG</p>
                    </div>
                    <div className={styles.welcome__field__body}>
                        <form id="regForm" onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
                            <div className={styles.welcome__field__body__or}>or</div>
                            <div className={styles.welcome__field__body__inputs}>
                                <div className={styles.welcome__field__body__name}>
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        placeholder='Your name' 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        minLength = '2'
                                    />
                                </div>
                                <div className={styles.welcome__field__body__email}>
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        placeholder='Email' 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>
                                <div className={styles.welcome__field__body__password}>
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        placeholder='Enter password' 
                                        value={password1} 
                                        onChange={(e) => setPassword1(e.target.value)}
                                        minLength = '8'
                                    />
                                </div>
                                <div className={styles.welcome__field__body__passwordConf}>
                                    <label>Confirm password</label>
                                    <input 
                                        type="password" 
                                        placeholder='Must contain at least one letter and one number' 
                                        value={password2} 
                                        onChange={(e) => setPassword2(e.target.value)}
                                        minLength = '8'
                                    />
                                </div>
                            </div>
                            {error && <div className={styles.error}>{error}</div>}
                            <button type="submit" className={styles.welcome__field__footer__loginBtn} onClick={submitForm}>Sign Up</button>
                        </form>
                    </div>
                    <div className={styles.welcome__field__footer}>
                        <div className={styles.welcome__field__footer__forgot} onClick={() => setIsForgotPassword(true)}>Forgot Password?</div>
                        <div className={styles.welcome__field__footer__loginBtn} onClick={toSignIn}>Log in</div>
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