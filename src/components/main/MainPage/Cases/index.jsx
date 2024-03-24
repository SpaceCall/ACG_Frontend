import React from 'react'
import styles from './cases.module.scss'

export default function Cases() {
    const list = [
        {
            title: ["Tailoring", "Education"],
            description: <>
                Based on your experience, ACG will generate a course that will provide the necessary knowledge to achieve your goal
            </>
        },
        {
            title: ["Real-projects", "practice"],
            description: <>
                Consolidate your knowledge by completing advanced practice exercises that will prepare you for real work tasks
            </>
        },
        {
            title: ["Individual", "support"],
            description: <>
                Receive support from a mentor-chatbot during the course and practical tasks. Based on your questions and results, ACG will adapt the next material.
            </>
        },
    ]

    return (
        <div id='cases' className={styles.cases}>
            <div className="container">
                <h2>Use  <span>cases</span></h2>
                <div className={styles.cases__wrapper}>
                    <ul className={styles.cases__list}>
                        {list.map((listItem, index) => (
                            <li key={index} className={styles.cases__list__item}>
                                <div className={styles.cases__list__item__info}>
                                    <h3>
                                        <span>
                                            {listItem.title[0]}
                                        </span>
                                        <span>
                                            {listItem.title[1]}
                                        </span>
                                    </h3>
                                    <p>
                                        {listItem.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
