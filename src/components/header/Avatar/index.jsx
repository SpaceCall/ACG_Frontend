import React, { useContext, useState } from 'react'
import styles from './avatar.module.scss'
import { LangContext } from '../../../context/Context';
import Cookies from 'js-cookie';

export default function Avatar() {
    const [isLogoutDropdown, setIsLogoutDropdown] = useState(false)
    const langContext = useContext(LangContext)
    const toggleLogoutDropdown = () => setIsLogoutDropdown(!isLogoutDropdown)
    const logout = () => langContext.setIsLogged(false)

    return (
        <div className={styles.avatar} onClick={toggleLogoutDropdown}>
            <span>{JSON.parse(Cookies.get('user')).user.name[0]}</span>
            {isLogoutDropdown && <div className={styles.avatar__logout} onClick={logout}>Log out</div>}
        </div>
    )
}
