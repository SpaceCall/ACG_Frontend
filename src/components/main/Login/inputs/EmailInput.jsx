import React from 'react'

export default function EmailInput({ styles, email, setEmail, errors }) {
    return (
        <>
            <div className={styles.welcome__field__body__email}>
                <label>Email</label>
                <input
                    type="email"
                    placeholder='Email'
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
