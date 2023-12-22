import React, { useState } from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'
import Content from './Content/index'
import CoursePath from './CoursePath'
import CourseBar from './CourseBar'

export default function Topics() {
    const [isActive, setIsActive] = useState({
        "lesson": "Lesson 1: Introduction to Python",
        "subtopic": "Understanding Python Syntax",
        "content":"",
    })

    return (
        <div className={styles.topics}>
            <CourseBar setIsActive={setIsActive} />
            <CoursePath isActive={isActive} />
            <Content isActive={isActive} />
            <AsideChat />
        </div>
    )
}
