import React, { useEffect, useState } from 'react'
import styles from './content.module.scss'
import image from './../../../../assets/icons/image.svg'

export default function Content({ isActive }) {
    const notes = 'Notes'
    const resources = 'Resources'
    const quiz = 'Quiz'

    const [activeButton, setActiveButton] = useState('notes')
    const makeActive = (button) => setActiveButton(button)
    
    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    <h2>{isActive.title}</h2>
                </div>
                <div className={styles.topics__content__image}>
                    <img src={image} alt="Pic" />
                </div>
                <div className={styles.topics__content__buttons}>
                    <button
                        className={activeButton === 'notes' ? styles.active : styles.nonActive}
                        onClick={() => makeActive('notes')}
                    >
                        {notes}
                    </button>
                    <button
                        className={activeButton === 'resources' ? styles.active : styles.nonActive}
                        onClick={() => makeActive('resources')}
                    >
                        {resources}
                    </button>
                    <button
                        className={activeButton === 'quiz' ? styles.active : styles.nonActive}
                        onClick={() => makeActive('quiz')}
                    >
                        {quiz}
                    </button>
                </div>
                <div className={styles.topics__content__text}>
                    {activeButton === 'notes' ? notes : null}
                    {activeButton === 'resources' ? resources : null}
                    {activeButton === 'quiz' ? quiz : null}
                </div>
            </div>
        </div>
    )
}
