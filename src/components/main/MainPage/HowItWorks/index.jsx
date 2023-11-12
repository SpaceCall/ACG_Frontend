import React from 'react'
import styles from './howItWorks.module.scss'

export default function HowItWorks() {
    const list = [
        {
            title: "Consult with the mentor-chatbot.",
            description: "Say exactly what you expect from the course, your current level of knowledge , and the time you want to invest in it."
        },
        {
            title: "Get a customized study plan.",
            description: "The mentor generates a study plan based on your preferences and actual topics for study"
        },
        {
            title: "Learn topics through video and text.",
            description: "At each stage of the plan, you will have access to the most relevant articles and videos for your studies"
        },
        {
            title: "Practice, ask questions, and provide feedback.",
            description: "Ask questions for clarification and take practical tasks to reinforce your understanding of the material"
        },
        {
            title: "The study plan is personalized for you.",
            description: "Based on comprehensive testing and feedback, it will be continuously enhanced to ensure 100% mastery of the material."
        }
    ]

    return (
        <div id='howitworks' className={styles.howItWorks}>
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
