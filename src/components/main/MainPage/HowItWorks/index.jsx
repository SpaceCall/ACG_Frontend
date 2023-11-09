import React from 'react'
import styles from './howItWorks.module.scss'

export default function HowItWorks() {
    const list = [
        {
            title: "Choose Your Learning Path",
            description: (
                <>
                    Dive into the world of knowledge by selecting the topic that ignites your curiosity. With a vast array of subjects to explore, <span>ACG</span> ensures you have the freedom to learn what matters most to you.
                </>
            ),
        },
        {
            title: "Customize Your Learning Experience",
            description: (
                <>
                    Tailor your course to match your schedule and expertise. Whether you're a beginner or an expert, <span>ACG</span> lets you decide the duration and difficulty level that suits your learning pace and style.
                </>
            ),
        },
        {
            title: "Your Comprehensive Learning Journey",
            description: (
                <>
                    <span>ACG</span> goes the extra mile to create a holistic learning experience for you. Our platform assembles a curated collection of videos, tutorials, images, and other resources, ensuring you get a well-rounded education in your chosen topic.
                </>
            ),
        }
    ]

    return (
        <div className={styles.howItWorks}>
            <h2>How it works?</h2>
            <ul className={styles.howItWorks__list}>
                {list.map((listItem, index) => (
                    <li key={index} className={styles.howItWorks__list__item}>
                        <div className={styles.howItWorks__list__item__number}>
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className={styles.howItWorks__list__item__info}>
                            <h3>
                                {listItem.title}
                            </h3>
                            <p>
                                {listItem.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
