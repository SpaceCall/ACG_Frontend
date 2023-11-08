import React from 'react'
import styles from './chatButtons.module.scss'
import { NavLink } from 'react-router-dom'

export default function ChatButtons() {
    return (
        <div className={styles.chatButtons}>
            <button className={styles.chatButtons__cancel}>
                <span>No, I want to change something</span>
            </button>
            <button className={styles.chatButtons__confirm}>   
                <NavLink to={"topics"}><span>Yes, generate course</span></NavLink>
            </button>
        </div>
    )
}
