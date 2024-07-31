import React, { useEffect, useState } from 'react';
import styles from './topics.module.scss';
import AsideChat from './AsideChat';
import CoursePath from './CoursePath';
import CourseBar from './CourseBar';
import ActiveCourse from './Content/activeCourse';
import data from './Content/data.json';
import support_icon from '../../../assets/icons/support_icon.svg'
import close_support_icon from '../../../assets/icons/close_support_icon.svg'
import SupportWindow from './SupportWindow';

export default function Topics() {
    const [isActive, setIsActive] = useState({});
    const [coursesData, setCoursesData] = useState([]);
    const [isSupportOpen, setIsSupportOpen] = useState(false)

    useEffect(() => {
        if (data && data.response) {
            setCoursesData(data.response);
            setIsActive(data.response[0]);
        }
    }, []);

    const supportToggle = () => setIsSupportOpen(!isSupportOpen)

    return (
        <div className={styles.topics}>
            <CourseBar setIsActive={setIsActive} isActive={isActive} coursesData={coursesData} />
            <div className={styles.topics__center}>
                <CoursePath isActive={isActive} coursesData={coursesData} />
                <ActiveCourse isActive={isActive} />
            </div>
            <AsideChat />
            <img className={styles.topics__support} src={isSupportOpen ? close_support_icon : support_icon} onClick={supportToggle} alt="Support" />
            {isSupportOpen && <SupportWindow styles={styles} />}
        </div>
    )
}
