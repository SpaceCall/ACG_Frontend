import React from 'react'
import styles from './coursePath.module.scss'

export default function CoursePath({ isActive }) {
    const pathParts = [
        'Courses',
        'Coding',
        `${isActive.topic}`,
    ]

    return (
        <div className={styles.topics__coursePath}>
            <div className={styles.topics__coursePath__wrapper}>
                {pathParts.map((pathPart, index) => (
                    <>
                        {index < pathParts.length - 1 ? (
                            <span className={styles.topics__coursePath__nonActive} key={index}>
                                {pathPart}
                                <span className={styles.topics__coursePath__slash}>/</span>
                            </span>
                        ) : (
                            <span className={styles.topics__coursePath__active}>{pathPart}</span>
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}
