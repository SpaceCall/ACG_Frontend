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
                            <div className={styles.cases__case__content__title}>
                                <div className={styles.cases__case__content__numbers}>01</div>
                                <h3>Tailoring Education</h3>
                            </div>
                            <p className={styles.cases__case__content__main__text}>
                            We will generate a course according to your expectations and experiance
                            </p>
                            <p className={styles.cases__case__content__learn_more__text}>
                            You no longer have to choose from dozens of different courses,
                                 afraid that you will pay for nothing and the course will not
                                  fit your expectations. Just talk to our mentor-chatbot,
                                   tell us what you want to learn, how much time you have and what
                                    experience you already have. <span>ACG</span> will design a learning plan based
                                     on your needs and experience.
                            </p>
                        </div>
                    </div>
                    <div className={styles.cases__case}>
                        <div className={styles.cases__case__content}>
                            <div className={styles.cases__case__content__title}>
                                <div className={styles.cases__case__content__numbers}>02</div>
                                <h3>Real-Projects Practice</h3>
                            </div>
                            <p className={styles.cases__case__content__main__text}>
                            You will consolidate your knowledge with advanced practical tasks that you can then encounter in real life
                            </p>
                            <p className={styles.cases__case__content__learn_more__text}>
                            After each module, we will give you a task that corresponds to real challenges
                             you may face in the future, and you will complete it from start to finish under
                              the mentorship of our chatbot, which will provide you with all the support you need.
                            </p>
                        </div>
                    </div>
                    <div className={styles.cases__case}>
                        <div className={styles.cases__case__content}>
                            <div className={styles.cases__case__content__title}>
                                <div className={styles.cases__case__content__numbers}>03</div>
                                <h3>Individual support</h3>
                            </div>
                            <p className={styles.cases__case__content__main__text}>
                            Our mentor-chatbot will explain any information and answer all your questions during the course
                            </p>
                            <p className={styles.cases__case__content__learn_more__text}>
                            If you encounter any questions during your studies or practical assignments,
                             there's no need to search the internet for answers. Our mentor chatbot will
                              supply you with all the necessary information and responses. Based on your queries,
                               the platform will generate the necessary material to better understand the topic
                            </p>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
}
