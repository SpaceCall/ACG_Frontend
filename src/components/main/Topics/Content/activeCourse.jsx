import React from 'react';
import styles from './content.module.scss';

export default function ActiveCourse({ isActive }) {
    console.log(isActive)
    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    {/* <h2>{isActive?.title}</h2> */}
                </div>
                <div className={styles.topics__content__text}>
                        <div className={styles.subtopic}>
                            <h3>{isActive.title}</h3>
                            {isActive?.links?.map((item, linkIndex) => (
                                <div key={linkIndex} className={styles.linkItem}>
                                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                        {item.link}
                                    </a>
                                    <p>{item.brief}</p>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
}
