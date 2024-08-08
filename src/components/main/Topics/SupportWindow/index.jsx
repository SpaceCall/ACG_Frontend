import React from 'react'
import arrow from '../../../../assets/icons/black_arrow_right.svg'

export default function SupportWindow({ styles }) {
    return (
        <div className={styles.topics__supportWindow}>
            <div className={styles.topics__supportWindow__chat}>
            <p className={`${styles.topics__supportWindow__chat__botMessage} ${styles.topics__supportWindow__chat__message}`}>BotBotBotBotBotBotBotBotBotBotBotBotBotBotBotBotBotBotBotBot</p>
            <p className={`${styles.topics__supportWindow__chat__userMessage} ${styles.topics__supportWindow__chat__message}`}>Chat</p>
            </div>
            <div className={styles.topics__supportWindow__bottom}>
                <input type="text" placeholder='How can i help?' />
                <div className={styles.topics__supportWindow__bottom__send}><img src={arrow} alt="" /></div>
            </div>
        </div>
    )
}
