import React from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'
import Content from './Content'
import CoursePath from './CoursePath'
import CourseBar from './CourseBar'

export default function Topics() {
    return (
        <div className={styles.topics}>
            <CourseBar />
            <CoursePath />
            <Content />
            <AsideChat />
        </div>
    )
}
