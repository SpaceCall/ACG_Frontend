import React from 'react'
import styles from './team.module.scss'
import Medias from '../../../shared/Medias'
import left_arrow from './../../../../assets/icons/black_arrow_right.svg'
import right_arrow from './../../../../assets/icons/black_arrow_left.svg'

export default function Team() {
    return (
        <div id='team' className={styles.team}>
            <h2>Our team</h2>
            <div className={styles.team__carousel}>
                <div className={styles.team__carousel__cards}>
                    <div className={styles.team__carousel__card}>
                        <div className={styles.team__carousel__card__header}>
                            <div className={styles.team__carousel__card__header__name}>
                                Name Surname
                            </div>
                            <div className={styles.team__carousel__card__header__speciality}>
                                AI - expert
                            </div>
                        </div>
                        <div className={styles.team__carousel__card__body}>
                            <p>Short background description</p>
                        </div>
                        <div className={styles.team__carousel__card__footer}>
                            <Medias />
                        </div>
                    </div>
                    <div className={styles.team__carousel__card}>
                        <div className={styles.team__carousel__card__header}>
                            <div className={styles.team__carousel__card__header__name}>
                                Name Surname
                            </div>
                            <div className={styles.team__carousel__card__header__speciality}>
                                AI - expert
                            </div>
                        </div>
                        <div className={styles.team__carousel__card__body}>
                            <p>Short background description</p>
                        </div>
                        <div className={styles.team__carousel__card__footer}>
                            <Medias />
                        </div>
                    </div>
                    <div className={styles.team__carousel__card}>
                        <div className={styles.team__carousel__card__header}>
                            <div className={styles.team__carousel__card__header__name}>
                                Name Surname
                            </div>
                            <div className={styles.team__carousel__card__header__speciality}>
                                AI - expert
                            </div>
                        </div>
                        <div className={styles.team__carousel__card__body}>
                            <p>Short background description</p>
                        </div>
                        <div className={styles.team__carousel__card__footer}>
                            <Medias />
                        </div>
                    </div>
                </div>
                <div className={styles.team__carousel__arrows}>
                    <button><img src={right_arrow} alt="Previous" /></button>
                    <button><img src={left_arrow} alt="Next" /></button>
                </div>
            </div>
        </div>
    )
}
