import React from 'react'

export default function IsExistModal({ styles, onClose }) {
    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <h2>This email is already used!</h2>
                            <p>Try to log in</p>
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
