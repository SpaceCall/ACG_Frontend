import React from 'react'

export default function NameInput({ styles, name, setName, errors }) {
    return (
        <>
            <div className={styles.welcome__field__body__name}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder='Your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={errors.name ? styles.inputError : ''}
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
