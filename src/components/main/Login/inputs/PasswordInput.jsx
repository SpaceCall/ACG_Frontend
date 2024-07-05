import React from 'react'
import visibleEye from '../../../../assets/icons/visible-eye.svg'
import invisibleEye from '../../../../assets/icons/invisible-eye.svg'

export default function PasswordInput({ styles, setShow, show, password, setPassword, errors, label, placeholder }) {
    const toggleShowPassword = () => setShow(!show)

    return (
        <>
            <div>
                <label>{label}</label>
                <input
                    type={show ? "text" : "password"}
                    placeholder={placeholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={errors ? styles.inputError : ''}
                />
                <img
                    src={show ? visibleEye : invisibleEye}
                    alt=''
                    onClick={toggleShowPassword}
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
