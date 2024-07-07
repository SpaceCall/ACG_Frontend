import React, { useState } from 'react'
import styles from './userCoursesPage.module.scss'
import AsideChat from '../../Topics/AsideChat'
import decore from '../../../../assets/images/userCourses/decore.png'

export default function UserCoursesPage() {
    const [activeBtn, setActiveBtn] = useState('active')

    const coursesData = [
        {
            id: 1,
            name: 'Name of the course 1',
            description: 'Description of the course'
        },
        {
            id: 2,
            name: 'Name of the course 2',
            description: 'Description of the course'
        }
    ]

    const completedCoursesData = [
        {
            id: 1,
            name: 'Name of the completed course 1',
            description: 'Description of the course'
        },
    ]

    const displayedCourses = activeBtn === 'active' ? coursesData : completedCoursesData;

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
                        {displayedCourses.length > 0 ?
                            <>
                                <h2>My courses</h2>
                                <div className={styles.page__coursesInfo__buttons}>
                                    <span
                                        onClick={() => setActiveBtn('active')}
                                        className={activeBtn === 'active' ? styles.active : styles.nonActive}>Active</span>
                                    <span
                                        onClick={() => setActiveBtn('completed')}
                                        className={activeBtn === 'completed' ? styles.active : styles.nonActive}>Completed</span>
                                </div>
                                <div className={styles.page__coursesInfo__courses}>
                                    {displayedCourses.map((course) => (
                                        <div className={styles.page__coursesInfo__courses__course} key={course.id}>
                                            <div className={styles.page__coursesInfo__courses__course__info}>
                                                <p>{course.name}</p>
                                                <span>{course.description}</span>
                                            </div>
                                            <div className={styles.page__coursesInfo__courses__course__button}>
                                                {activeBtn === 'active' ?
                                                    <a href="#">Continue</a>
                                                    :
                                                    <a href="#">Details</a>
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                            :
                            <>
                                <h3>You don't have any courses yet</h3>
                                <p>Start your own journey right now!</p>
                                <a href="/chat">Go to bot</a>
                            </>
                        }
                    </div>
                </div>
                <AsideChat />
            </div>
        </div>
    )
}
