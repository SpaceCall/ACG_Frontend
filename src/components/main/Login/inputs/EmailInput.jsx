import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../../../../context/Context.js'

export default function EmailInput({ styles, email, setEmail, errors }) {
    const langContext = useContext(LangContext)
    
    return (
        <>
            <div className={styles.welcome__field__body__email}>
                <label><FormattedMessage id='inputs.email'></FormattedMessage></label>
                <input
                    type="email"
                    placeholder={langContext.activeLang === 'en' ? 'Email' : 'Пошта'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors ? styles.inputError : ''}
                />
            </div>
            {errors && (
                <div className={styles.error}>
                    <span>{errors}</span>
                </div>
            )}
        </>
    )
}
