import React from 'react'
import styles from './coursePath.module.scss'

export default function CoursePath({ isActive }) {
    const pathParts = [
        'Courses',
        'Coding',
        `${isActive.title.substr(0, 8)}`,
        `${isActive.title.substr(10)}`
    ]

    return (
        <div className={styles.topics__coursePath}>
            <div className={styles.topics__coursePath__wrapper}>
                {pathParts.map((pathPart, index) => (
                    <span className={styles.topics__coursePath__nonActive} key={index}>
                        {index < pathParts.length - 1 ? (
                            <>
                                {pathPart}
                                <span className={styles.topics__coursePath__slash}>/</span>
                            </>
                        ) : (
                            <span className={styles.topics__coursePath__active}>{pathPart}</span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    )
}
