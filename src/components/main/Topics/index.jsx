import React from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'
import CourseBar from './CourseBar'

export default function Topics() {
    return (
        <div className={styles.topics}>
            <CourseBar />
            <div className="container">
                <div className={styles.topics__wrapper}></div>
            </div>
            <AsideChat />
        </div>
    )
}
