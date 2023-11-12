import React from 'react'
import styles from './cases.module.scss'

export default function Cases() {
    return (
        <div id='cases' className={styles.cases}>
            <h2>Use Cases</h2>
            <table className={styles.cases__table}>
                <colgroup>
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th><div>Tailoring Education</div></th>
                        <th><div>Individual Approach</div></th>
                        <th><div>Task-Oriented Learning</div></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                You no longer have to choose from dozens of different courses, afraid that you will pay for nothing and the course will not fit your expectations. Just talk to our mentor-chatbot, tell us what you want to learn, how much time you have and what experience you already have. <span>ACG</span> will design a learning plan based on your needs and experience.
                            </div>
                        </td>
                        <td>
                            <div>
                                <span>ACG</span> will personalize the learning process and materials according to your preferences, feedback, and practice results. The platform analyzes your practice results, as well as learning difficulties and questions you asked the bot throughout the course. Based on this information, <span>ACG</span> updates your training plan to help you understand the material. And as you go through the course, you don't have to run to google for more explanations. You will always have a bot mentor to explain everything you don't understand.
                            </div>
                        </td>
                        <td>
                            <div>
                                We can help you accomplish a specific task. You can tell us what you are looking for from this course, what skills you are interested in and we will provide material especially to prepare you for the assignment. We will give detailed practical assignments, so that you do not just learn the theory, but immediately apply it on real tasks.
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
