import React, { useEffect } from 'react';
import styles from './links.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Links() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(location);
    }, [location]);

    const links = [
        {
            value: 'Use cases',
            path: 'cases',
            anchor: true
        },
        {
            value: 'How it works',
            path: 'howitworks',
            anchor: true
        },
        {
            value: 'Blog',
            path: 'blogs',
            anchor: false
        },
        {
            value: 'Contacts',
            path: 'contacts',
            anchor: true
        },
    ];

    const handleLinkClick = (link) => {
        if (link.anchor && location.pathname !== '/') {
            navigate(`/#${link.path}`);
        }
    };

    return (
        <nav className={styles.header__links}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        {link.anchor ? (
                            <a href={`#${link.path}`} onClick={() => handleLinkClick(link)}>
                                {link.value}
                            </a>
                        ) : (
                            <a href={`/${link.path}`}>{link.value}</a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
