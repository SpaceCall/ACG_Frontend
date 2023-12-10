import React from 'react'
import styles from './howItWorks.module.scss'

export default function HowItWorks() {
    const list = [
        {
            title: ["Choose Your", "Learning Path"],
            description: <>
                Dive into the world of knowledge by selecting the topic that ignites your curiosity. With a vast array of subjects to explore, <span>ACG</span> ensures you have the freedom to learn what matters most to you. Say exactly what you expect from the course, your current level of knowledge, and the time you want to invest in it.
            </>
        },
        {
            title: ["Customize Your", "Learning Experience"],
            description: <>
                Dive into the world of knowledge by selecting the topic that ignites your curiosity. With a vast array of subjects to explore, <span>ACG</span> ensures you have the freedom to learn what matters most to you. Say exactly what you expect from the course, your current level of knowledge, and the time you want to invest in it.
            </>
        },
        {
            title: ["Your Comprehensive", "Learning Journey"],
            description: <>
                Dive into the world of knowledge by selecting the topic that ignites your curiosity. With a vast array of subjects to explore, <span>ACG</span> ensures you have the freedom to learn what matters most to you. Say exactly what you expect from the course, your current level of knowledge, and the time you want to invest in it.
            </>
        },
    ]

    return (
        <div id='howitworks' className={styles.howItWorks}>
            <div className="container">
                <h2>How it works <span>?</span></h2>
                <div className={styles.howItWorks__wrapper}>
                    <ul className={styles.howItWorks__list}>
                        {list.map((listItem, index) => (
                            <li key={index} className={styles.howItWorks__list__item}>
                                <div className={styles.howItWorks__list__item__info}>
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
