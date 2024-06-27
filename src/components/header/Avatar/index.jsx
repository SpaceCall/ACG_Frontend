import React, { useContext, useState } from 'react'
import styles from './avatar.module.scss'
import { LangContext } from '../../../context/Context';

export default function Avatar() {
    const [isLogoutDropdown, setIsLogoutDropdown] = useState(false)
    const langContext = useContext(LangContext)
    const toggleLogoutDropdown = () => setIsLogoutDropdown(!isLogoutDropdown)
    const logout = () => langContext.setIsLogged(false)

    return (
        <div className={styles.avatar} onClick={toggleLogoutDropdown}>
            <span>A</span>
            {isLogoutDropdown && <div className={styles.avatar__logout} onClick={logout}>Log out</div>}
        </div>
    )
}
