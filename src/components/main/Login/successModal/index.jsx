import React from 'react'
import { FormattedMessage } from 'react-intl';

export default function SuccessModal({ styles, onClose, userEmail}) {
    const email = userEmail

    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <h2><FormattedMessage id='modals.success.header.title'></FormattedMessage></h2>
                            <p><FormattedMessage id='modals.success.message.firstPart'></FormattedMessage> <a href={`mailto:${email}`}>{email}</a> <FormattedMessage id='modals.success.message.lastPart'></FormattedMessage></p>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <a href='signIn' className={styles.welcome__modal__body__btn}>Log in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
