import React, { useState } from 'react'
import styles from './courseBar.module.scss'
import tick from '../../../../assets/icons/complete_icon.svg'
import document from '../../../../assets/icons/text_icon_b.svg'
import arrow from '../../../../assets/icons/open_topic.svg'

export default function CourseBar({ setIsActive, isActive, coursesData }) {
    const [activeCourses, setActiveCourses] = useState([])

    const handleCourseClick = (course) => activeCourses.includes(course) ? setActiveCourses(activeCourses.filter((active) => active !== course)) : setActiveCourses([...activeCourses, course])

    return (
        <div className={styles.courseBar}>
            {coursesData && coursesData.map((course, index) => (
                <div key={index}>
                    <div
                        className={`${styles.courseBar__topic}`}
                        onClick={() => handleCourseClick(course)}
                    >
                        <div className={styles.courseBar__topic__left}>
                            <img src={tick} alt="" />
                            <div className={styles.courseBar__topic__left__info}>
                                <span>{course.title}</span>
                                <span>Video: 10 min</span>
                            </div>
                        </div>
                        <img
                            src={arrow}
                            alt=""
                            className={`${styles.courseBar__arrow} ${activeCourses.includes(course) ? styles.courseBar__arrow__open : styles.courseBar__arrow__closed}`}
                        />
                    </div>
                    {activeCourses.includes(course) && (
                        <div className={styles.subtopics}>
                            {course.subtopics.map((subtopic, subIndex) => (
                                <div
                                    key={subIndex}
                                    onClick={() => setIsActive(subtopic)}
                                    className={`${styles.courseBar__subtopic} ${isActive && isActive.title === subtopic.title ? styles.active : ''}`}>
                                    <img src={document} alt="" />
                                    <span>{subtopic.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
