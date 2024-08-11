import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './topics.module.scss';
import AsideChat from './AsideChat';
import CoursePath from './CoursePath';
import CourseBar from './CourseBar';
import ActiveCourse from './Content/activeCourse';
import SupportWindow from './SupportWindow';
import ModalCourseBar from './ModalCourseBar';
import api from '../../../service/api';
import support_icon from '../../../assets/icons/support_icon.svg';
import close_support_icon from '../../../assets/icons/close_support_icon.svg';
import data from './Content/data.json';

export default function Topics() {
    const { token } = useParams(); // Получаем ID курса из URL
    const [isChatOpened, setIsChatOpened] = useState(false);
    const [isPlanOpened, setIsPlanOpened] = useState(false);
    const [isActive, setIsActive] = useState({});
    const [coursesData, setCoursesData] = useState([]);
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const effectRan = useRef(false);
    useEffect(() => {
        if (effectRan.current) return;
        const fetchCourseData = async () => {
            try {
                const course = await api.getCourdeById(token);
                for (let i = 0; i < course.topicsId.length; i++) {
                    try {
                        const topic = await api.getTopicId(course.topicsId[i]);
                        console.log(topic)
                        coursesData.push(topic)
                    } catch (error) {
                        console.error('Error fetching course by ID', error);
                    }
                }
                setCoursesData(coursesData);
                setIsActive(coursesData[0].subtopics[0]);
                console.log(coursesData[0])
            } catch (error) {
                console.error('Error fetching course data', error);
            }
        };
        fetchCourseData();
        effectRan.current = true;
    }, []);

    const supportToggle = () => setIsSupportOpen(!isSupportOpen);

    console.log("Rendering Topics with:", { coursesData, isActive, isPlanOpened });

    return (
        <div className={styles.topics}>
            <CourseBar setIsActive={setIsActive} isActive={isActive} coursesData={coursesData} />
            {isPlanOpened && <ModalCourseBar isPlanOpened={isPlanOpened} setIsPlanOpened={setIsPlanOpened} isActive={isActive} setIsActive={setIsActive} coursesData={coursesData} />}
            <div className={styles.topics__center}>
                <CoursePath isActive={isActive} coursesData={coursesData} />
                <ActiveCourse isActive={isActive} />
                {isSupportOpen && <SupportWindow styles={styles} />}
                <img className={styles.topics__support} src={isSupportOpen ? close_support_icon : support_icon} onClick={supportToggle} alt="Support" />
                <div className={styles.topics__center__buttons}>
                    <button className={styles.topics__center__buttons__bot} onClick={() => setIsChatOpened(true)}>Bot</button>
                    <button className={styles.topics__center__buttons__plan} onClick={() => setIsPlanOpened(true)}>Plan</button>
                </div>
            </div>
        </div>
    );
}
