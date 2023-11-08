import React, { useState } from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'
import Content from './Content'
import CoursePath from './CoursePath'
import CourseBar from './CourseBar'
import Chat from '../Chat'
export default function Topics() {
    const [isActive, setIsActive] = useState({
        "lesson": "Lesson 1",
        "subtopic": "The subtopic 1"
    })

    return (
        <div className={styles.topics}>
            <CourseBar setIsActive={setIsActive} />
            <CoursePath isActive={isActive} />
            <Content isActive={isActive} />
            <div><Chat /> </div>
        </div>
    )
}
