import React, { useContext, useState, useRef, useEffect } from 'react'
import styles from './avatar.module.scss'
import { LangContext } from '../../../context/Context';
import Cookies from 'js-cookie';

export default function Avatar() {
    const [isLogoutDropdown, setIsLogoutDropdown] = useState(false)
    const langContext = useContext(LangContext)
    const avatarRef = useRef(null)

    const toggleLogoutDropdown = () => setIsLogoutDropdown(!isLogoutDropdown)
    const logout = () => langContext.setIsLogged(false)

    const handleClickOutside = (event) => {
        if (avatarRef.current && !avatarRef.current.contains(event.target)) {
            setIsLogoutDropdown(false)
        }
    }

    useEffect(() => {
        if (isLogoutDropdown) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isLogoutDropdown])

    return (
        <div className={styles.avatar} ref={avatarRef} onClick={toggleLogoutDropdown}>
            <span>Name</span>
            <div className={styles.avatar__photo}>
                <span>N</span>
                {isLogoutDropdown &&
                    <div className={styles.avatar__dropdown}>
                        <div className={styles.avatar__dropdown__userInfo}>
                            <span>Name</span>
                            <span>example@gmail.com</span>
                        </div>
                        <nav className={styles.avatar__dropdown__navigation}>
                            <ul>
                                <li><a href='#'>Profile</a></li>
                                <li><a href='/courses'>My courses</a></li>
                                <li><a href='#'>My certificates</a></li>
                                <li><a href='#'>Feedback</a></li>
                                <li>
                                    <span onClick={logout}>Log out</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                }
            </div>
        </div>
    )
}


// {JSON.parse(Cookies.get('user')).user.name[0]}