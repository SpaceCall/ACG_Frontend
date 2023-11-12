import React, { useState } from 'react'
import styles from './messageInput.module.scss'
import Input from './Input'
import Button from './Button'

export default function MessageInput({ sendMessage, isSubmitDisabled }) {
    const [label, setLabel] = useState('')
    const onLabelChange = (e) => setLabel(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        sendMessage(label)
        setLabel('')
    }

    return (
        <div className={styles.messageInput}>
            <div className="container">
                <form className={styles.messageInput__wrapper} onSubmit={onSubmit}>
                    <input className={styles.messageInput__input}
                        type="text"
                        value={label}
                        onChange={onLabelChange}
                        placeholder="What needs to be done?"
                        
                    />
                    <button disabled={isSubmitDisabled} type="submit" className={styles.messageInput__button}><img src={send} alt="Send" /></button>
                </form>
            </div>
        </div>
    )
}
