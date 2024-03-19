import React from 'react'

export default function CheckModalBody({ styles }) {
    return (
        <div className={styles.login__modal__body}>
            <div className={styles.login__modal__body__btn}>Send</div>
            <div className={styles.login__modal__body__again}>
                <span>Don't get instructions? </span>
                <span>Try again</span>
            </div>
        </div>
    )
}
