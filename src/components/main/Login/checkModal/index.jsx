import React from 'react'

export default function CheckModal({ styles, onClose }) {
    const email = 'example@gmail.com'

    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <h2>Check your email</h2>
                            <p className={styles.welcome__modal__header__check}>
                                <span>We've sent you a password reset link to</span>
                                <span>{email}</span>
                                <span>Please also check your spam folder</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <div className={styles.welcome__modal__body__btn}>Send</div>
                        <div className={styles.welcome__modal__body__again}>
                            <span>Don't get instructions? </span>
                            <span>Try again</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
