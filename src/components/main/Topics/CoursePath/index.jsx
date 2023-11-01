import React from 'react'
import styles from './coursePath.module.scss'

export default function CoursePath() {
    const pathParts = [
        'Courses',
        'Coding',
        'Lesson 2',
        'The subtopic 1'
    ]

    return (
        <div className={styles.topics__coursePath}>
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
    )
}
