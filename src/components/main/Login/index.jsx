import React, { useState } from 'react'
import styles from './styles/index.module.scss'
import SignInPage from './signInPage'
import SignUpPage from './signUpPage'

export default function Login() {
    const [isForSignIn, setIsForSignIn] = useState(false)

    return (
        <>
            {!isForSignIn ? 
                <SignInPage styles={styles} toSignUp={() => setIsForSignIn(true)} /> 
                    : 
                <SignUpPage styles={styles} toSignIn={() => setIsForSignIn(false)} />}
        </>
    )
}
