import React from 'react'
import styles from './scrollToBottomButton.module.scss'
import arrow from './../../../assets/icons/black_arrow_left.svg'

export default function ScrollToBottomButton({ show, onClick }) {
    if (!show) return null

    return (
        <button onClick={onClick} className={styles.scrollToBottomButton}>
            <img src={arrow} alt="Down" />
        </button>
    )
}
