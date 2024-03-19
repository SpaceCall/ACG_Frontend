import React from 'react'

export default function ForgotModalHeader({ styles, onClose }) {
    return (
        <div className={styles.login__modal__header}>
            <span className={styles.login__modal__header__close} onClick={onClose}>X</span>
            <div className={styles.login__modal__header__text}>
                <h2>Forgot password? No worries</h2>
                <p>We'll email you reset instructions</p>
            </div>
        </div>
    )
}
