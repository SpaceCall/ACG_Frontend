import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import styles from './howItWorks.module.scss';
import images from './images';

export default function HowItWorks() {
    const [activeBlock, setActiveBlock] = useState(0);

    const howItWorksData = [
        {
            number: '01',
            title: 'Consult with the mentor-chatbot.',
            desription: 'Say what you want to learn, your background and the goal you want to achieve',
            activeImage: images.activeImageFirst
        },
        {
            number: '02',
            title: 'Get a customized study plan',
            desription: 'Receive a study plan based on your preferences and actual topics for study',
            activeImage: images.activeImageSecond
        },
        {
            number: '03',
            title: 'Learn topics through video and text.',
            desription: 'At each stage, you will have access to the most relevant articles and videos for your studies',
            activeImage: images.activeImageThird
        },
        {
            number: '04',
            title: 'Mentor support',
            desription: 'Receive answers to questions that arise during the course from a chatbot mentor',
            activeImage: images.activeImageFourth
        }
    ];

    const sliderSettings = {
        horizontal: true,
        adaptiveHeight: false,
        swipe: true,
        infinite: false,
        arrows: false
    };

    return (
        <div id='howItWorks' className={styles.howItWorks}>
            <div className='container'>
                <div className={styles.howItWorks__wrapper}>
                    <h2 className={styles.howItWorks__title}>How it <span>works ?</span></h2>
                    <div className={styles.howItWorks__list}>
                        <div className={styles.howItWorks__list__blocks}>
                            {howItWorksData.map((block, index) => (
                                <div
                                    key={block.number}
                                    className={`${styles.howItWorks__list__blocks__block} ${activeBlock === index ? styles.active : ''}`}
                                    onClick={() => setActiveBlock(index)}
                                >
                                    <h2>{block.number}.</h2>
                                    <p>{block.title}</p>
                                    <div className={styles.line}></div>
                                    <li>{block.desription}</li>
                                </div>
                            ))}
                        </div>
                        <div className={styles.howItWorks__laptop}>
                            <div className={styles.howItWorks__laptop__image}>
                                <AnimatePresence>
                                    <motion.img
                                        key={howItWorksData[activeBlock].number}
                                        src={howItWorksData[activeBlock].activeImage}
                                        alt="Active Laptop Image"
                                        initial={{ opacity: 0, x: '100%' }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: '-100%' }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
