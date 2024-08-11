import React, { useState } from 'react';
import styles from './courseBar.module.scss';
import document from '../../../../assets/icons/text_icon_b.svg';

export default function CourseBar({ setIsActive, isActive, coursesData }) {
    const [activeCourse, setActiveCourse] = useState(null);

    const handleCourseClick = (course) => {
        setActiveCourse(activeCourse === course ? null : course);
    };

    return (
        <div className={styles.courseBar}>
            {coursesData && coursesData.map((course, index) => (
                <div key={index}>
                    <div
                        className={`${styles.courseBar__topic} ${isActive && isActive.title === course.title ? styles.active : ''}`}
                        onClick={() => handleCourseClick(course)}
                    >
                        <img src={document} alt="" />
                        <span>{course.title}</span>
                    </div>
                    {activeCourse === course && (
                        <div className={styles.subtopics}>
                            {course.subtopics.map((subtopic, subIndex) => (
                                <div key={subIndex} className={styles.courseBar__topic}>
                                    <span onClick={() => setIsActive(subtopic)}> {subtopic.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
