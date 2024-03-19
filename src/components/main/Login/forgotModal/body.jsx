import React from 'react'

export default function ForgotModalBody({ styles }) {
    return (
        <div className={styles.login__modal__body}>
            <div className={styles.login__modal__body__email}>
                <label>Email</label>
                <input type="email" />
            </div>
            <div className={styles.login__modal__body__btn}>Send</div>
            <span className={styles.login__modal__body__remember}>Remember password?</span>
        </div>
    )
}
