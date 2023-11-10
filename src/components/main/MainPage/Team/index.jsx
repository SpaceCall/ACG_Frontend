import React, { useRef, useEffect, useState } from 'react'
import styles from './team.module.scss'
import Medias from '../../../shared/Medias'
import left_arrow from './../../../../assets/icons/black_arrow_left.svg'
import right_arrow from './../../../../assets/icons/black_arrow_right.svg'

const teamMembers = [
    {
        name: 'Name Surname 1',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
    {
        name: 'Name Surname 2',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
    {
        name: 'Name Surname 3',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
    {
        name: 'Name Surname 4',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
    {
        name: 'Name Surname 5',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
    {
        name: 'Name Surname 6',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
    {
        name: 'Name Surname 7',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
    {
        name: 'Name Surname 8',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
    {
        name: 'Name Surname 9',
        speciality: 'AI - expert',
        description: 'Short background description',
    },
]

export default function Team() {
    const [currentPosition, setCurrentPosition] = useState(0)
    const [slideWidth, setSlideWidth] = useState(0)
    const gap = 24

    const carouselRef = useRef(null)
    const cardRef = useRef(null)

    useEffect(() => {
        setSlideWidth(cardRef.current.clientWidth)

        const handleResize = () => {
            setSlideWidth(cardRef.current.clientWidth)
            setCurrentPosition(0)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const nextSlide = () => currentPosition < teamMembers.length - 2 ? setCurrentPosition(currentPosition + 1) : null

    const prevSlide = () => currentPosition > 0 ? setCurrentPosition(currentPosition - 1) : null

    useEffect(() => {
        carouselRef.current.style.transform = `translateX(-${currentPosition * (slideWidth + gap)}px)`
    }, [currentPosition, slideWidth])

    return (
        <div id='team' className={styles.team}>
            <h2>Our team</h2>
            <div className={styles.team__carousel}>
                <div ref={carouselRef} className={styles.team__carousel__cards}>
                    {teamMembers.map((member, index) => (
                        <div key={index} ref={cardRef} className={styles.team__carousel__card}>
                            <div className={styles.team__carousel__card__header}>
                                <div className={styles.team__carousel__card__header__name}>{member.name}</div>
                                <div className={styles.team__carousel__card__header__speciality}>{member.speciality}</div>
                            </div>
                            <div className={styles.team__carousel__card__body}>
                                <p>{member.description}</p>
                            </div>
                            <div className={styles.team__carousel__card__footer}>
                                <Medias />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.team__carousel__arrows}>
                    <button onClick={prevSlide}>
                        <img src={left_arrow} alt='Previous' />
                    </button>
                    <button onClick={nextSlide}>
                        <img src={right_arrow} alt='Next' />
                    </button>
                </div>
            </div>
        </div>
    );
}
