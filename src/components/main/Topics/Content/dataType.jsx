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
                Variables in Python are created when values are assigned to them, and the data type is determined automatically. Python supports various data types, such as integers, floats, strings, lists, tuples, dictionaries, and others.
                <br/>
                <CodeMirror
                    value={`x = 5  # integer
y = 3.14  # float
s = "Hello"  # string
lst = [1, 2, 3]  # list
tpl = (1, 2, 3)  # tuple
dct = {"one": 1, "two": 2}  # dictionary`}
                    height="100px"
                    readOnly={true}
                    theme={okaidia}
                    extensions={[StreamLanguage.define(python)]}
                />
                </div>
            </div>
        </div>
    )
}
