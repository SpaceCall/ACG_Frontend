import React, { useState } from 'react'
import send from './../../../../../assets/icons/send.svg'
import styles from './asideMessageInput.module.scss'

export default function AsideMessageInput({ sendMessage,isSubmitDisabled }) {
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
                    <button disabled={isSubmitDisabled}type="submit" className={styles.messageInput__button}><img src={send} alt="Send" /></button>
                </form>
            </div>
        </div>
    )
}
