import React, { useState } from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'
import Content from './Content/index'
import CoursePath from './CoursePath'
import CourseBar from './CourseBar'
import Test from './Test'

export default function Topics() {
    const [isActive, setIsActive] = useState({
        "lesson": "Choose your lesson",
        "subtopic": "",
        "content":"",
    })

    return (
        <div className={styles.topics}>
            <CourseBar setIsActive={setIsActive} />
            <div className={styles.topics__center}>
                <CoursePath isActive={isActive} />
                <Content isActive={isActive} />
                <Test />
            </div>
            <AsideChat />
        </div>
    )
}
