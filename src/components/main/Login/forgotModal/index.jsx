import React from 'react'
import ForgotModalHeader from './header'
import ForgotModalBody from './body'

export default function ForgotModal({ styles, onClose }) {
    return (
        <div className={styles.login__modal}>
            <div className={styles.login__modal__wrapper}>
                <div className={styles.login__modal__content}>
                    <ForgotModalHeader styles={styles} onClose={onClose} />
                    <ForgotModalBody styles={styles} />
                </div>
            </div>
        </div>
    )
}
