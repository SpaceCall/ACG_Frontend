import React, { useEffect, useState } from 'react'
import styles from './content.module.scss'
import image from './../../../../assets/icons/image.svg'
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { StreamLanguage } from "@codemirror/language";
import { python } from "@codemirror/legacy-modes/mode/python";

export default function Content({ isActive }) {
    const notes = isActive.content
    const resources = `Resources ${isActive.lesson}: ${isActive.subtopic}`

    const [activeButton, setActiveButton] = useState('notes')
    const makeActive = (button) => setActiveButton(button)

    useEffect(() => makeActive('notes'), [isActive])
    const regex = /(<([^>]+)>)/ig;
  
    const formattedTitle = notes.replace(regex, '')
    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    <h2>{isActive.lesson}<br/> {isActive.subtopic}</h2>
                </div>
                <div className={styles.topics__content__image}>
                </div>
                <div className={styles.topics__content__buttons}>
                    <button
                        className={activeButton === 'notes' ? styles.active : styles.nonActive}
                        onClick={() => makeActive('notes')}
                    >
                        Notes
                    </button>
                    <button
                        className={activeButton === 'resources' ? styles.active : styles.nonActive}
                        onClick={() => makeActive('resources')}
                    >
                        Resources
                    </button>
                </div>
                <div className={styles.topics__content__text}>
                    {activeButton === 'notes' ? notes : null}
                    {activeButton === 'resources' ? resources : null}
                </div>
            </div>
        </div>
    )
}
