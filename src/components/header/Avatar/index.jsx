import React, { useContext, useState, useRef, useEffect } from 'react';
import styles from './avatar.module.scss';
import { LangContext } from '../../../context/Context';
import api from '../../../service/api';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default function Avatar() {
    const [isLogoutDropdown, setIsLogoutDropdown] = useState(false);
    const langContext = useContext(LangContext);
    const avatarRef = useRef(null);
    const [user, setUser] = useState({ name: '', username: '', email: '', createdAt: '' });
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const location = useLocation();
    const toggleLogoutDropdown = () => setIsLogoutDropdown(!isLogoutDropdown);
    const logout = () =>{
    Cookies.remove('userToken')
    langContext.setIsLogged(false);
}

    const handleClickOutside = (event) => {
        if (avatarRef.current && !avatarRef.current.contains(event.target)) {
            setIsLogoutDropdown(false);
        }
    };

    useEffect(() => {
        if (isLogoutDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLogoutDropdown]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.getUserData(fetchUserData);
                if (response) {
                    setUser(response);
                    console.log("usergeted")
                } else {
                    console.error('Unexpected response format:', response);
                }
            } catch (error) {
                console.error('Ошибка при загрузке данных', error);
            } finally {
                setIsLoading(false); // Set loading to false after data is fetched
            }
        };
        fetchUserData();
    }, [location]);

    if (isLoading) {
        return <div></div>; // Show loading state
    }

    return (
        <div className={styles.avatar} ref={avatarRef} onClick={toggleLogoutDropdown}>
            <span>
                {user.username}
            </span>
            <div className={styles.avatar__photo}>
                <span>{user.username[0]}</span>
                {isLogoutDropdown &&
                    <div className={styles.avatar__dropdown}>
                        <div className={styles.avatar__dropdown__userInfo}>
                            <span>{user.username}</span>
                            <span>{user.email}</span>
                        </div>
                        <nav className={styles.avatar__dropdown__navigation}>
                            <ul>
                                <li><a href='#'><FormattedMessage id="dropdown.profile" /></a></li>
                                <li><a href='/courses'><FormattedMessage id="dropdown.courses" /></a></li>
                                <li><a href='#'><FormattedMessage id="dropdown.certificates" /></a></li>
                                <li><a href='#'><FormattedMessage id="dropdown.feedback" /></a></li>
                                <li>
                                    <span onClick={logout}><FormattedMessage id="dropdown.logout" /></span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                }
            </div>
        </div>
    );
}
