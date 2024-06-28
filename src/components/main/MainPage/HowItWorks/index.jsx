import React, { useState, useRef } from 'react';
import styles from './howItWorks.module.scss';
import images from './images';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FormattedMessage } from 'react-intl';

export default function HowItWorks() {
    const [activeBlock, setActiveBlock] = useState(0);
    const swiperRef = useRef(null);

    const howItWorksData = [
        {
            number: '01',
            titleId: 'landing.main.howItWorks.first.title',
            descriptionId: 'landing.main.howItWorks.first.description',
            activeImage: images.activeImageFirst
        },
        {
            number: '02',
            titleId: 'landing.main.howItWorks.second.title',
            descriptionId: 'landing.main.howItWorks.second.description',
            activeImage: images.activeImageSecond
        },
        {
            number: '03',
            titleId: 'landing.main.howItWorks.third.title',
            descriptionId: 'landing.main.howItWorks.third.description',
            activeImage: images.activeImageThird
        },
        {
            number: '04',
            titleId: 'landing.main.howItWorks.fourth.title',
            descriptionId: 'landing.main.howItWorks.fourth.description',
            activeImage: images.activeImageFourth
        },
        {
            number: '05',
            titleId: 'landing.main.howItWorks.fifth.title',
            descriptionId: 'landing.main.howItWorks.fifth.description',
            activeImage: images.activeImageFifth
        }
    ];

    const handleBlockClick = (index) => {
        setActiveBlock(index);
        if (swiperRef.current && swiperRef.current.slideTo) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div id='howitworks' className={styles.howItWorks}>
            <div className='container'>
                <div className={styles.howItWorks__wrapper}>
                    <h2 className={styles.howItWorks__title}>
                        <FormattedMessage id="landing.main.howItWorks.title.firstPart" /> <span>
                            <FormattedMessage id="landing.main.howItWorks.title.secondPart" />
                        </span>
                    </h2>
                    <div className={styles.howItWorks__list}>
                        <div className={styles.howItWorks__list__blocks}>
                            {howItWorksData.map((block, index) => (
                                <div
                                    key={block.number}
                                    className={`${styles.howItWorks__list__blocks__block} ${activeBlock === index ? styles.active : ''}`}
                                    onClick={() => handleBlockClick(index)}
                                >
                                    <h2>{block.number}.</h2>
                                    <p><FormattedMessage id={block.titleId} /></p>
                                    <div className={styles.line}></div>
                                    <li><span><FormattedMessage id={block.descriptionId} /></span></li>
                                </div>
                            ))}
                        </div>
                        <div className={styles.howItWorks__list__dots}>
                            {howItWorksData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`${styles.dot} ${activeBlock === index ? styles.activeDot : ''}`}
                                    onClick={() => handleBlockClick(index)}
                                ></div>
                            ))}
                        </div>
                        <div className={styles.howItWorks__laptop}>
                            <Swiper
                                slidesPerView={1}
                                className={styles.howItWorks__laptop__images}
                                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                                onSlideChange={(swiper) => setActiveBlock(swiper.activeIndex)}
                            >
                                {howItWorksData.map((block, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={block.activeImage} alt={`Slide ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
