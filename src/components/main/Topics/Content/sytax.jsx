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
                Python's syntax includes the structure of the language and the rules for writing correct programs. Important aspects of Python's syntax are:
                Comments start with the # symbol.
                <CodeMirror
                    value={'# This is a comment'}
                    height="25px"
                    readOnly={true}
                    theme={okaidia}
                    extensions={[StreamLanguage.define(python)]}
                />

                The end of a line signifies the end of a statement.

            
                <CodeMirror
                    value={'x = 5'}
                    height="25px"
                    readOnly={true}
                    theme={okaidia}
                    extensions={[StreamLanguage.define(python)]}
                />
                Semicolons (;) can be used to separate statements on one line.
                <CodeMirror
                    value={'x = 5; y = 10'}
                    height="25px"
                    readOnly={true}
                    theme={okaidia}
                    extensions={[StreamLanguage.define(python)]}
                />
                Indentation is important for defining code blocks.

                <CodeMirror
                    value={`if x < 10:
print("x is less than 10")`}
                    height="40px"
                    readOnly={true}
                    theme={okaidia}
                    extensions={[StreamLanguage.define(python)]}
                />
                

                Parentheses are used for grouping or calling functions.

                <CodeMirror
                    value={`print("Hello, World!")`}
                    height="25px"
                    readOnly={true}
                    theme={okaidia}
                    extensions={[StreamLanguage.define(python)]}
                />
                </div>
            </div>
        </div>
    )
}
