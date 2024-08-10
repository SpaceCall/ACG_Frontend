import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './userCoursesPage.module.scss';
import AsideChat from '../../Topics/AsideChat';
import decore from '../../../../assets/images/userCourses/decore.png';
import api from '../../../../service/api';

export default function UserCoursesPage() {
    const [activeBtn, setActiveBtn] = useState('active');
    const [courses, setCourses] = useState([]);
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current) return;
        const getAllCourses = async () => {
            try {
                const response = await api.getAllCourse();
                console.log(response);
                const coursesData = [];
                for (let i = 0; i < response.length; i++) {
                    try {
                        const response1 = await api.getCourdeById(response[i]);
                        response1.id = i + 1;
                        response1.name = `Name of the course ${i + 1}`;
                        coursesData.push(response1);
                    } catch (error) {
                        console.error('Error fetching course by ID', error);
                    }
                }
                setCourses(coursesData); // Обновление состояния courses
                console.log(coursesData);
            } catch (error) {
                console.error('Error during fetching all courses', error);
            }
        };
        getAllCourses();
        effectRan.current = true;
    }, []);

    const completedCoursesData = [
        {
            id: 1,
            name: 'Name of the completed course 1',
            description: 'Description of the course',
        },
    ];

    const displayedCourses = activeBtn === 'active' ? courses : completedCoursesData;

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.page__wrapper}>
                    <div className={styles.page__frame}>
                        <img src={decore} alt="" />
                        <h2>Hi, Name!</h2>
                        <p>It`s good to see you.</p>
                    </div>
                    <div className={styles.page__coursesInfo}>
                        {displayedCourses.length > 0 ? (
                            <>
                                <h2>My courses</h2>
                                <div className={styles.page__coursesInfo__buttons}>
                                    <span
                                        onClick={() => setActiveBtn('active')}
                                        className={activeBtn === 'active' ? styles.active : styles.nonActive}
                                    >
                                        Active
                                    </span>
                                    <span
                                        onClick={() => setActiveBtn('completed')}
                                        className={activeBtn === 'completed' ? styles.active : styles.nonActive}
                                    >
                                        Completed
                                    </span>
                                </div>
                                <div className={styles.page__coursesInfo__courses}>
                                    {displayedCourses.map((course) => (
                                        <div className={styles.page__coursesInfo__courses__course} key={course.id}>
                                            <div className={styles.page__coursesInfo__courses__course__info}>
                                                <p>{course.name}</p>
                                                <span>{course.description}</span>
                                            </div>
                                            <div className={styles.page__coursesInfo__courses__course__button}>
                                                {activeBtn === 'active' ? (
                                                    <Link to={`/topics/${course.courseId}`}>Continue</Link>
                                                ) : (
                                                    <a href="#">Details</a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <h3>You don't have any courses yet</h3>
                                <p>Start your own journey right now!</p>
                                <a href="/chat">Go to bot</a>
                            </>
                        )}
                    </div>
                </div>
                <AsideChat />
            </div>
        </div>
    );
}
