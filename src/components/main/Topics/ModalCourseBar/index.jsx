import React from 'react'
import styles from './modalCourseBar.module.scss';
import close_plan_icon from '../../../../assets/icons/white-cross.svg'
import document from '../../../../assets/icons/text_icon_b.svg';

export default function ModalCourseBar({ setIsPlanOpened, isActive, setIsActive, coursesData }) {
    const handleCourseClick = (course) => {
        setIsActive(course)
        setIsPlanOpened(false)
    }

    return (
        <div className={styles.modalCourseBar}>
            <div className={styles.modalCourseBar__wrapper}>
                <div className={styles.modalCourseBar__content}>
                    <div className={styles.modalCourseBar__header}>
                        <div className={styles.modalCourseBar__header__close} onClick={() => setIsPlanOpened(false)}><img src={close_plan_icon} alt="X" /></div>
                    </div>
                    <div className={styles.modalCourseBar__body}>
                        {coursesData && coursesData.map((course, index) => (
                            <div
                                key={index}
                                className={`${styles.modalCourseBar__topic} ${isActive && isActive.topic === course.topic ? styles.active : ''}`}
                                onClick={() => handleCourseClick(course)}
                            >
                                <img src={document} alt="" />
                                <span>{course.topic}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
