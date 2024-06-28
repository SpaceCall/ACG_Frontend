import React, { useEffect, useState } from 'react';
import styles from './topics.module.scss';
import AsideChat from './AsideChat';
import CoursePath from './CoursePath';
import CourseBar from './CourseBar';
import ActiveCourse from './Content/activeCourse';
import data from './Content/data.json';

export default function Topics() {
    const [isActive, setIsActive] = useState({});
    const [coursesData, setCoursesData] = useState([]);

    useEffect(() => {
        if (data && data.response) {
            setCoursesData(data.response);
            setIsActive(data.response[0]);
        }
    }, []);

    return (
        <div className={styles.topics}>
            <CourseBar setIsActive={setIsActive} isActive={isActive} coursesData={coursesData} />
            <div className={styles.topics__center}>
                <CoursePath isActive={isActive} coursesData={coursesData} />
                <ActiveCourse isActive={isActive} />
            </div>
            <AsideChat />
        </div>
    );
}
