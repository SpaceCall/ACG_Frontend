import React from 'react'

export default function ResetModal({ styles, onClose }) {
    return (
        <div className={styles.login__modal}>
            <div className={styles.login__modal__wrapper}>
                <div className={styles.login__modal__content}>
                    <div className={styles.login__modal__header}>
                        <span className={styles.login__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.login__modal__header__text}>
                            <h2>Reset password</h2>
                        </div>
                    </div>
                    <div className={styles.login__modal__body}>
                        <div className={styles.login__modal__body__input}>
                            <label>Email</label>
                            <input type="email" placeholder='Enter email' />
                        </div>
                        <div className={styles.login__modal__body__input}>
                            <label>Password</label>
                            <input type="email" placeholder='Must contain at least one letter and number' />
                        </div>
                        <div className={styles.login__modal__body__input}>
                            <label>Confirm password</label>
                            <input type="email" placeholder='Confirm' />
                        </div>
                        <div className={styles.login__modal__body__btn}>Reset password</div>
                        <span className={styles.login__modal__body__remember}>Remember password</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
