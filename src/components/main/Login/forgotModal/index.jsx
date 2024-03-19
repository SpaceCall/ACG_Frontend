import React from 'react'

export default function ForgotModal({ styles, onClose }) {
    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <h2>Forgot password? No worries</h2>
                            <p>We'll email you reset instructions</p>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <div className={styles.welcome__modal__body__input}>
                            <label>Email</label>
                            <input type="email" placeholder='Enter email' />
                        </div>
                        <div className={styles.welcome__modal__body__btn}>Send</div>
                        <span className={styles.welcome__modal__body__remember}>Remember password?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
