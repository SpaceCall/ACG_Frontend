import React from 'react';
import styles from './cases.module.scss';

export default function Cases() {
    return (
        <div id='cases' className={styles.cases}>
            <div className="container">
                <h2>Use Cases</h2>
                <div className={styles.cases__wrapper}>
                    <div className={styles.cases__case}>
                        <div className={styles.cases__case__content}>
                            <div className={styles.cases__case__title}>
                                <div className={styles.cases__case__numbers}>01</div>
                                <h3>Tailoring Education</h3>
                            </div>
                            <p>
                                You no longer have to choose from dozens of different courses,
                                afraid that you will pay for nothing and the course will not fit
                                your expectations. Just talk to our mentor-chatbot, tell us what
                                you want to learn, how much time you have and what experience
                                you already have. <span>ACG</span> will design a learning plan
                                based on your needs and experience.
                            </p>
                        </div>
                    </div>
                    <div className={styles.cases__case}>
                        <div className={styles.cases__case__content}>
                            <div className={styles.cases__case__title}>
                                <div className={styles.cases__case__numbers}>02</div>
                                <h3>Individual Approach</h3>
                            </div>
                            <p>
                                <span>ACG</span> will personalize the learning process and
                                materials according to your preferences, feedback, and practice
                                results. The platform analyzes your practice results, as well as
                                learning difficulties and questions you asked the bot
                                throughout the course. Based on this information, <span>ACG</span>{' '}
                                updates your training plan to help you understand the material.
                                And as you go through the course, you don't have to run to google
                                for more explanations. You will always have a bot mentor to
                                explain everything you don't understand.
                            </p>
                        </div>
                    </div>
                    <div className={styles.cases__case}>
                        <div className={styles.cases__case__content}>
                            <div className={styles.cases__case__title}>
                                <div className={styles.cases__case__numbers}>03</div>
                                <h3>Task-Oriented Learning</h3>
                            </div>
                            <p>
                                We can help you accomplish a specific task. You can tell us what
                                you are looking for from this course, what skills you are
                                interested in and we will provide material especially to prepare
                                you for the assignment. We will give detailed practical
                                assignments, so that you do not just learn the theory, but
                                immediately apply it on real tasks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
