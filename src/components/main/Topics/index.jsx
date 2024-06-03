import React, { useState } from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'
import CoursePath from './CoursePath'
import CourseBar from './CourseBar'
import ActiveCourse from './Content/activeCourse'

export default function Topics() {
    const [isActive, setIsActive] = useState({
        "lesson": "Lesson 1: Introduction to Python",
        "subtopic": "Understanding Python Syntax",
    })

    return (
        <div className={styles.topics}>
            <CourseBar setIsActive={setIsActive} />
            <div className={styles.topics__center}>
                <CoursePath isActive={isActive} />
                <ActiveCourse isActive={isActive} />
            </div>
            <AsideChat />
        </div>
    )
}
