import React, { useState } from 'react'
// import styles from '../styles/index.module.scss'
// import PasswordInput from '../inputs/PasswordInput'
import { FormattedMessage } from 'react-intl';
import PasswordInput from '../../inputs/PasswordInput';

export default function ResetModal({ onClose, styles }) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfPassword, setShowConfPassword] = useState(false)
    const [errors, setErrors] = useState({ password: '', confirmPassword: '' })

    const handleReset = () => {
        let errorMessages = { password: '', confirmPassword: '' }
        const uppercasePattern = /[A-Z]/

        if (password.length < 8) errorMessages.password += 'Password must contain at least 8 characters. '
        if (!uppercasePattern.test(password)) errorMessages.password += 'Password must contain at least one uppercase letter. '
        if (password !== confirmPassword) errorMessages.confirmPassword = 'Passwords do not match.'

        if (!errorMessages.password && !errorMessages.confirmPassword) {
            // Handle password reset logic here
            console.log('Password reset successfully')
        }
        setErrors(errorMessages)
    }

    return (
        <div className={styles.welcome__modal}>
            <div className={styles.welcome__modal__wrapper}>
                <div className={styles.welcome__modal__content}>
                    <div className={styles.welcome__modal__header}>
                        <span className={styles.welcome__modal__header__close} onClick={onClose}>X</span>
                        <div className={styles.welcome__modal__header__text}>
                            <FormattedMessage id='modals.reset.header.subtitle'></FormattedMessage>
                        </div>
                    </div>
                    <div className={styles.welcome__modal__body}>
                        <div className={styles.welcome__modal__body__input}>
                            <PasswordInput
                                styles={styles}
                                setShow={setShowPassword}
                                show={showPassword}
                                password={password}
                                setPassword={setPassword}
                                errors={errors.password}
                                label="Password"
                                placeholder="Must contain at least one letter and number"
                            />
                        </div>
                        <div className={styles.welcome__modal__body__input}>
                            <PasswordInput
                                styles={styles}
                                setShow={setShowConfPassword}
                                show={showConfPassword}
                                password={confirmPassword}
                                setPassword={setConfirmPassword}
                                errors={errors.confirmPassword}
                                label="Confirm Password"
                                placeholder="Confirm"
                            />
                        </div>
                        <div className={styles.welcome__modal__body__btn} onClick={handleReset}><FormattedMessage id='modals.reset.button'></FormattedMessage></div>
                        <span className={styles.welcome__modal__body__remember} onClick={onClose}><FormattedMessage id='modals.reset.remember'></FormattedMessage></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
