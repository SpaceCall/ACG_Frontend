import React from 'react';
import styles from './courseBar.module.scss';
import document from '../../../../assets/icons/text_icon_b.svg';

export default function CourseBar({ setIsActive, isActive, coursesData }) {
    const handleCourseClick = (course) => setIsActive(course)

    return (
        <div className={styles.courseBar}>
            {coursesData && coursesData.map((course, index) => (
                <div
                    key={index}
                    className={`${styles.courseBar__topic} ${isActive && isActive.topic === course.topic ? styles.active : ''}`}
                    onClick={() => handleCourseClick(course)}
                >
                    <img src={document} alt="" />
                    <span>{course.topic}</span>
                </div>
            ))}
        </div>
    );
}
