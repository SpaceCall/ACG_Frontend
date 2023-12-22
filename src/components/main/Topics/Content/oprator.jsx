import React, { useEffect, useState } from 'react'
import styles from './content.module.scss'
import image from './../../../../assets/icons/image.svg'
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { StreamLanguage } from "@codemirror/language";
import { python } from "@codemirror/legacy-modes/mode/python";

export default function Content({ isActive }) {
    const [activeButton, setActiveButton] = useState('notes')
    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    <h2>{isActive.lesson}<br/> {isActive.subtopic}</h2>
                </div>
                <div className={styles.topics__content__buttons}>
                    <button
                        className={activeButton === 'notes' ? styles.active : styles.nonActive}
                    >
                        Notes
                    </button>
                    <button
                        className={activeButton === 'resources' ? styles.active : styles.nonActive}
                    >
                        Resources
                    </button>
                </div>
                <div className={styles.topics__content__text}>
                Python supports various operators for performing arithmetic, logical, and comparison operations, such as +, -, *, /, %, **, ==, !=, and others. Python also supports assignment operators, such as =, +=, -=, and others.

                
                <CodeMirror
                    value={`x = 5 + 3  # addition
y = 5 - 3  # subtraction
z = 5 * 3  # multiplication
w = 5 / 3  # division`}
                    height="70px"
                    readOnly={true}
                    theme={okaidia}
                    extensions={[StreamLanguage.define(python)]}
                />
                
                By studying these topics, you will be able to understand the basics of Python and start writing your code in this language.
                </div>
            </div>
        </div>
    )
}
