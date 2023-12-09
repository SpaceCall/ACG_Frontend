import React from 'react';
import styles from './cases.module.scss';
import case_image from './../../../../assets/images/case-image.png';

export default function Cases() {
    const casesData = [
        {
            title: ['Tailoring', 'Education'],
            list: [
                'ACG will design a learning plan based on your needs and experience.',
                'ACG will design a learning plan based on your needs and experience.',
            ],
        },
        {
            title: ['Task-Oriented', 'Learning'],
            list: [
                'We will give detailed practical assignments, so that you do not just learn the theory, but immediately apply it on real tasks.',
                'You can tell us what you are looking for from this course, what skills you are interested in, and we will provide material especially to prepare you for the assignment.',
            ],
        },
        {
            title: ['Individual', 'Approach'],
            list: [
                'The platform analyzes your practice results, as well as learning difficulties and questions you asked the bot throughout the course.',
                'Based on this information, ACG updates your training plan to help you understand the material.',
                'You will always have a bot mentor to explain everything you don\'t understand.',
            ],
        },
    ]

    return (
        <div id='cases' className={styles.cases}>
            <div className='container'>
                <h2 className={styles.cases__title}>Use Cases</h2>
                <div className={styles.cases__wrapper}>
                    {casesData.map((caseItem, index) => (
                        <div
                            key={index}
                            className={`
                                ${styles.cases__case} 
                                ${index % 2 === 0 ? styles.cases__odd : 
                                                    styles.cases__even}
                            `}
                        >
                            <div
                                className={`
                                    ${styles.cases__case__image} 
                                    ${index % 2 === 0 ? 
                                        styles.cases__odd__image : 
                                        styles.cases__even__image}
                                `}>
                                <img src={case_image} alt='Chat' />
                            </div>
                            <div
                                className={`
                                    ${styles.cases__case__description} 
                                    ${index % 2 === 0 ? styles.cases__odd__description : 
                                                        styles.cases__even__description}
                                `}>
                                <h3
                                    className={`
                                        ${styles.cases__case__description__title} 
                                        ${index % 2 === 0 ? styles.cases__odd__description__title : 
                                                            styles.cases__even__description__title}
                                    `}>
                                    <span
                                        className={`
                                            ${styles.cases__case__description__title__orange} 
                                            ${index % 2 === 0 ? styles.cases__odd__description__title__orange : 
                                                                styles.cases__even__description__title__orange}
                                    `}>
                                        {caseItem.title[0]}
                                    </span>
                                    <span
                                        className={`
                                            ${styles.cases__case__description__title__black} 
                                            ${index % 2 === 0 ? styles.cases__odd__description__title__black : 
                                                                styles.cases__even__description__title__black}
                                        `}>
                                        {caseItem.title[1]}
                                    </span>
                                </h3>
                                <ul
                                    className={`
                                        ${styles.cases__case__description__list} 
                                        ${index % 2 === 0 ? styles.cases__odd__description__list : 
                                                            styles.cases__even__description__list}`}>
                                    {caseItem.list.map((item, listItemIndex) => (
                                        <li key={listItemIndex}>
                                            <div className={styles.line}>
                                                <hr />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
