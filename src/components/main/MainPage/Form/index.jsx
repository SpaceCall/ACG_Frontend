import React from 'react'
import styles from './form.module.scss'

export default function Form() {
    return (
        <div id='form' className={styles.form}>
            <h2>Join the ACG Community</h2>
            <p>Become a part of the <span>ACG</span> community and gain access to personalized learning like never before. Sign up now to start your journey toward knowledge, growth, and success.</p>
            <form>
                <input type="text" placeholder='Enter your email' />
                <a href='#'>Send</a>
            </form>
        </div>
    )
}
