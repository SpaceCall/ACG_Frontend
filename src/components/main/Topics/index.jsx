import React, { useState } from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'
import Syntax from './Content/sytax'
import DataType from './Content/dataType'
import Operator from './Content/oprator'
import Optimizing from './Content/optimizing'
import CoursePath from './CoursePath'
import CourseBar from './CourseBar'
import Test from './Test'

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
                {isActive.subtopic === 'Understanding Python Syntax' ? <Syntax isActive={isActive} /> : null}
                {isActive.subtopic === 'Variables and Data Types in Python' ? <DataType isActive={isActive} /> : null}
                {isActive.subtopic === 'Basic Python Operators' ? <Operator isActive={isActive} /> : null}
                {isActive.subtopic === 'Test' ? <Test isActive={isActive} /> : null}
                {isActive.subtopic === 'Optimizing the Game Code' ? <Optimizing isActive={isActive} /> : null}
               
            </div>
            <AsideChat />
        </div>
    )
}
