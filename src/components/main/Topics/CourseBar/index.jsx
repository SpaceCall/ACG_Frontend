import React, { useState } from 'react';
import styles from './courseBar.module.scss';
import document from '../../../../assets/icons/text_icon_b.svg';
import arrow from '../../../../assets/icons/open_topic.svg';

export default function CourseBar({ setIsActive, isActive, coursesData }) {
    const [activeCourses, setActiveCourses] = useState([]);

    const handleCourseClick = (course) => {
        if (activeCourses.includes(course)) {
            setActiveCourses(activeCourses.filter((active) => active !== course));
        } else {
            setActiveCourses([...activeCourses, course]);
        }
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
                        <img src={arrow} alt="" className={styles.courseBar__arrow} />
                    </div>
                    {activeCourses.includes(course) && (
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
