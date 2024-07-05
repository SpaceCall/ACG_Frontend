import React from 'react';
import styles from './links.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default function Links({ onClose }) {
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        {
            value: 'header.navigation.cases',
            path: 'cases',
            anchor: true
        },
        {
            value: 'header.navigation.works',
            path: 'howitworks',
            anchor: true
        },
        {
            value: 'header.navigation.blog',
            path: 'blogs',
            anchor: false
        },
        {
            value: 'header.navigation.contacts',
            path: 'contacts',
            anchor: true
        },
    ];

    const handleLinkClick = (link) => {
        if (link.anchor && location.pathname !== '/') {
            navigate(`/#${link.path}`);
        }
        if(onClose) onClose()
    };

    return (
        <nav className={styles.header__links}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        {link.anchor ? (
                            <a href={`#${link.path}`} onClick={() => handleLinkClick(link)}>
                                <FormattedMessage id={link.value}></FormattedMessage>
                            </a>
                        ) : (
                            <a href={`/${link.path}`}><FormattedMessage id={link.value}></FormattedMessage></a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
