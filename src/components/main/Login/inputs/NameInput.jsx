import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../../../../context/Context.js'

export default function NameInput({ styles, name, setName, errors }) {
    const langContext = useContext(LangContext)

    return (
        <>
            <div>
                <label><FormattedMessage id='inputs.name'></FormattedMessage></label>
                <input
                    type="text"
                    placeholder={langContext.activeLang === 'en' ? "Your name" : "Ваше ім'я"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
