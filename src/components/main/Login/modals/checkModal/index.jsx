import React from 'react'
import { FormattedMessage } from 'react-intl';

export default function CheckModal({ styles, onClose, userEmail }) {
    const email = userEmail ? userEmail : 'example@gmail.com'

    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <h2><FormattedMessage id='modals.check.header.title'></FormattedMessage></h2>
                            <p className={styles.welcome__modal__header__check}>
                                <span><FormattedMessage id='modals.check.message.firstPart'></FormattedMessage></span>
                                <span>{email}</span>
                                <span><FormattedMessage id='modals.check.message.lastPart'></FormattedMessage></span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <div className={styles.welcome__modal__body__btn}><FormattedMessage id='modals.check.send'></FormattedMessage></div>
                        <div className={styles.welcome__modal__body__again}>
                            <span><FormattedMessage id='modals.check.dontGet'></FormattedMessage> </span>
                            <span><FormattedMessage id='modals.check.again'></FormattedMessage></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
