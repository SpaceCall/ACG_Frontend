import React, { useEffect, useState } from 'react';
import styles from './howItWorks.module.scss';
import images from './images';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

export default function HowItWorks() {
    const [activeBlock, setActiveBlock] = useState(0)
    const [timerId, setTimerId] = useState(null)

    const howItWorksData = [
        {
            number: '01',
            title: 'Consult with the mentor-chatbot.',
            description: 'Say what you want to learn, your background and the goal you want to achieve',
            activeImage: images.activeImageFirst
        },
        {
            number: '02',
            title: 'Get a customized study plan',
            description: 'Receive a study plan based on your preferences and actual topics for study',
            activeImage: images.activeImageSecond
        },
        {
            number: '03',
            title: 'Learn topics through video and text.',
            description: 'At each stage, you will have access to the most relevant articles and videos for your studies',
            activeImage: images.activeImageThird
        },
        {
            number: '04',
            title: 'Mentor support',
            description: 'Receive answers to questions that arise during the course from a chatbot mentor',
            activeImage: images.activeImageFourth
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveBlock(prevBlock => (prevBlock + 1) % howItWorksData.length)
        }, 5000)

        setTimerId(timer)

        return () => {
            clearInterval(timer)
        }
    }, [])

    const handleBlockClick = (index) => {
        setActiveBlock(index)
        clearInterval(timerId)
        const timer = setInterval(() => {
            setActiveBlock(prevBlock => (prevBlock + 1) % howItWorksData.length)
        }, 5000)
        setTimerId(timer)
    }

    return (
        <div id='howitworks' className={styles.howItWorks}>
            <div className='container'>
                <div className={styles.howItWorks__wrapper}>
                    <h2 className={styles.howItWorks__title}>How it <span>works ?</span></h2>
                    <div className={styles.howItWorks__list}>
                        <div className={styles.howItWorks__list__blocks}>
                            {howItWorksData.map((block, index) => (
                                <div
                                    key={block.number}
                                    className={`${styles.howItWorks__list__blocks__block} ${activeBlock === index ? styles.active : ''}`}
                                    onClick={() => handleBlockClick(index)}
                                >
                                    <h2>{block.number}.</h2>
                                    <p>{block.title}</p>
                                    <div className={styles.line}></div>
                                    <li>{block.description}</li>
                                </div>
                            ))}
                        </div>
                        <div className={styles.howItWorks__laptop}>
                            <img src={images.laptop} className={styles.laptop} alt="Laptop" />
                            <Swiper
                                slidesPerView={1}
                                className={styles.howItWorks__laptop__images}
                            >
                                <SwiperSlide><img src={howItWorksData[0].activeImage} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={howItWorksData[1].activeImage} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={howItWorksData[2].activeImage} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={howItWorksData[3].activeImage} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
