import React from 'react'

export default function SuccessModal({ styles, onClose }) {
    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <h2>Success</h2>
                            <p>Your password has been reset</p>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <div className={styles.welcome__modal__body__btn}>Log In</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
