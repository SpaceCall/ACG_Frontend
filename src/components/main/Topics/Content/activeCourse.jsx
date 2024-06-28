import React from 'react';
import styles from './content.module.scss';

export default function ActiveCourse({ isActive }) {

    const combinedContent = isActive?.links?.map((link, index) => ({
        link: link,
        brief: isActive.briefs[index] || ''
    }));

    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    <h2>{isActive.topic}</h2>
                </div>
                <div className={styles.topics__content__buttons}>
                    {/* <button
                        className={activeButton === 'notes' ? styles.active : styles.nonActive}
                        onClick={() => setActiveButton('notes')}
                    >
                        Notes
                    </button>
                    <button
                        className={activeButton === 'resources' ? styles.active : styles.nonActive}
                        onClick={() => setActiveButton('resources')}
                    >
                        Resources
                    </button> */}
                </div>
                <div className={styles.topics__content__text}>
                    {combinedContent && combinedContent.map((item, index) => (
                        <React.Fragment key={index}>
                            <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.link}</a>
                            <span>{item.brief}</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}