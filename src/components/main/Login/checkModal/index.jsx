import React from 'react'
import CheckModalHeader from './header'
import CheckModalBody from './body'

export default function CheckModal({ styles, onClose }) {
    return (
        <div className={styles.login__modal}>
            <div className={styles.login__modal__wrapper}>
                <div className={styles.login__modal__content}>
                    <CheckModalHeader styles={styles} onClose={onClose} />
                    <CheckModalBody styles={styles} />
                </div>
            </div>
        </div>
    )
}
