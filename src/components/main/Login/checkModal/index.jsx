import React from 'react'

export default function CheckModal({ styles, onClose }) {
    const email = 'example@gmail.com'

    return (
        <div className={styles.login__modal}>
            <div className={styles.login__modal__wrapper}>
                <div className={styles.login__modal__content}>
                    <div className={styles.login__modal__header}>
                        <span className={styles.login__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.login__modal__header__text}>
                            <h2>Check your email</h2>
                            <p className={styles.login__modal__header__check}>
                                <span>We've sent you a password reset link to</span>
                                <span>{email}</span>
                                <span>Please also check your spam folder</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.login__modal__body}>
                        <div className={styles.login__modal__body__btn}>Send</div>
                        <div className={styles.login__modal__body__again}>
                            <span>Don't get instructions? </span>
                            <span>Try again</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
