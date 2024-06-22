import React from 'react'

export default function SuccessModal({ styles, onClose, userEmail}) {
    const email = userEmail

    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <h2>Check your email</h2>
                            <p>We’ve sent you a password reset link to <a href={`mailto:${email}`}>{email}</a> Please also check your spam folder</p>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <a href='signIn' className={styles.welcome__modal__body__btn}>Log In</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
