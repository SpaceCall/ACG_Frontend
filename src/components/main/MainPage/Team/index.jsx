import React, { useRef, useEffect, useState } from 'react';
import styles from './team.module.scss'
import Medias from '../../../shared/Medias'
import left_arrow from './../../../../assets/icons/black_arrow_left.svg'
import right_arrow from './../../../../assets/icons/black_arrow_right.svg'
import membersData from './teamMembers'

export default function Team() {
    const [currentPosition, setCurrentPosition] = useState(0)
    const [slideWidth, setSlideWidth] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [threshold, setThreshold] = useState(3)
    const gap = 24

    const carouselRef = useRef(null)
    const cardRef = useRef(null)

    useEffect(() => {
        if (window.innerWidth > 768) {
            setThreshold(3)
        } else if (window.innerWidth <= 768 && window.innerWidth >= 480) {
            setThreshold(2)
        } else {
            setThreshold(1)
        }

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

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.clientX - carouselRef.current.offsetLeft)
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return

        const x = e.pageX - carouselRef.current.offsetLeft
        const dragDistance = x - startX

        if (dragDistance > slideWidth / 2) {
            prevSlide()
            setStartX(x)
        } else if (dragDistance < -slideWidth / 2) {
            nextSlide()
            setStartX(x)
        } else {
            carouselRef.current.style.transform = `translateX(-${currentPosition * (slideWidth + gap) + dragDistance}px)`
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const nextSlide = () => (currentPosition < membersData.length - threshold ? setCurrentPosition(currentPosition + 1) : null)

    const prevSlide = () => (currentPosition > 0 ? setCurrentPosition(currentPosition - 1) : null)

    useEffect(() => {
        carouselRef.current.style.transform = `translateX(-${currentPosition * (slideWidth + gap)}px)`
    }, [currentPosition, slideWidth])

    return (
        <div
            id='team'
            className={styles.team}

        >
            <div className="container">
                <h2>Our team</h2>
                <div className={styles.team__carousel}>
                    <div className={styles.team__carousel__wrapper}>
                        <div
                            ref={carouselRef}
                            className={styles.team__carousel__cards}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onTouchStart={handleMouseDown}
                            onTouchMove={handleMouseMove}
                            onTouchEnd={handleMouseUp}>
                            {membersData.map((member, index) => (
                                <div key={index} ref={cardRef} className={styles.team__carousel__card}>
                                    <div className={styles.team__carousel__card__header}>
                                        <div className={styles.team__carousel__card__header__name}>{member.name}</div>
                                        <div className={styles.team__carousel__card__header__speciality}>
                                            {member.speciality}
                                        </div>
                                    </div>
                                    <div className={styles.team__carousel__card__body}>
                                        <div className={styles.team__carousel__card__body__photo}>
                                            {member.photo && <img src={member.photo} alt={member.name} draggable="false" />}
                                        </div>
                                    </div>
                                    <div className={styles.team__carousel__card__footer}>
                                        <Medias profileLink={member.contacts} />
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
            </div>
        </div>
    );
}
