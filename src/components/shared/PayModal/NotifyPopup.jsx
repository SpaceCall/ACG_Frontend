import React, { useState } from 'react'

export default function NotifyPopup({ styles, onClose }) {
    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.popup__content}>
                    <div className={styles.popup__header}>
                        <span className={styles.popup__header__close} onClick={onClose}>X</span>
                        <h2>Wait!</h2>
                    </div>
                    <div className={styles.popup__body}>
                        <p>We are very grateful for your interest in our product! It is extremely important for us and will help us develop the platform faster.</p>
                        <p>When the product is ready for purchase, we will definitely notify you via email. In the meantime, we invite you to join our community and follow our news on social media.</p>
                        <button onClick={onClose} className={styles.popup__body__btn}>Stay in touch!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
