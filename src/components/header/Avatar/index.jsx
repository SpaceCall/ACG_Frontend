import React, { useContext, useState, useRef, useEffect } from 'react';
import styles from './avatar.module.scss';
import { LangContext } from '../../../context/Context';
import api from '../../../service/api';

export default function Avatar() {
    const [isLogoutDropdown, setIsLogoutDropdown] = useState(false);
    const langContext = useContext(LangContext);
    const avatarRef = useRef(null);
    const [user, setUser] = useState({ name: '', username: '', email: '', createdAt: '' });
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const toggleLogoutDropdown = () => setIsLogoutDropdown(!isLogoutDropdown);
    const logout = () => langContext.setIsLogged(false);

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
                const response = await api.getUserData();
                if (response) {
                    setUser(response);
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
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Show loading state
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
    );
}
