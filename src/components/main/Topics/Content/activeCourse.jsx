import React, { useState } from 'react';
import styles from './content.module.scss';
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { StreamLanguage } from "@codemirror/language";
import { python } from "@codemirror/legacy-modes/mode/python";

const lessonContent = {
    "Lesson 1: Introduction to Python": {
        "Understanding Python Syntax": {
            notes: (
                <>
                    <p>Python's syntax includes the structure of the language and the rules for writing correct programs. Important aspects of Python's syntax are:</p>
                    <p>Comments start with the # symbol.</p>
                    <CodeMirror
                        value={'# This is a comment'}
                        height="25px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <p>The end of a line signifies the end of a statement.</p>
                    <CodeMirror
                        value={'x = 5'}
                        height="25px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <p>Semicolons (;) can be used to separate statements on one line.</p>
                    <CodeMirror
                        value={'x = 5; y = 10'}
                        height="25px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <p>Indentation is important for defining code blocks.</p>
                    <CodeMirror
                        value={`if x < 10:\n    print("x is less than 10")`}
                        height="40px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <p>Parentheses are used for grouping or calling functions.</p>
                    <CodeMirror
                        value={`print("Hello, World!")`}
                        height="25px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                </>
            ),
            resources: (
                <>
                    <p>Coming soon.</p>
                </>
            ),
        },
        "Variables and Data Types in Python": {
            notes: (
                <>
                    <p>Variables in Python are created when values are assigned to them, and the data type is determined automatically. Python supports various data types, such as integers, floats, strings, lists, tuples, dictionaries, and others.</p>
                    <CodeMirror
                        value={`x = 5  # integer\n y = 3.14  # float\n s = "Hello"  # string\n lst = [1, 2, 3]  # list\n tpl = (1, 2, 3)  # tuple\n dct = {"one": 1, "two": 2}  # dictionary`}
                        height="100px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                </>
            ),
            resources: (
                <>
                    <p>Coming soon.</p>
                </>
            ),
        },
        "Basic Python Operators": {
            notes: (
                <>
                    <p>Python supports various operators for performing arithmetic, logical, and comparison operations, such as +, -, *, /, %, **, ==, !=, and others. Python also supports assignment operators, such as =, +=, -=, and others.</p>
                    <CodeMirror
                        value={`x = 5 + 3  # addition\n y = 5 - 3  # subtraction\n z = 5 * 3  # multiplication\n w = 5 / 3  # division`}
                        height="70px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <p>By studying these topics, you will be able to understand the basics of Python and start writing your code in this language.</p>
                </>
            ),
            resources: (
                <>
                    <p>Coming soon.</p>
                </>
            ),
        },
    },
};

export default function ActiveCourse({ isActive }) {
    const [activeButton, setActiveButton] = useState('resources');

    const content = lessonContent[isActive.lesson]?.[isActive.subtopic] || { notes: 'Coming soon.', resources: 'Coming soon.' };

    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    <h2>{isActive.lesson}<br /> {isActive.subtopic}</h2>
                </div>
                <div className={styles.topics__content__buttons}>
                    <button
                        className={activeButton === 'notes' ? styles.active : styles.nonActive}
                        onClick={() => setActiveButton('notes')}
                    >
                        Notes
                    </button>
                    <button
                        className={activeButton === 'resources' ? styles.active : styles.nonActive}
                        onClick={() => setActiveButton('resources')}
                    >
                        Resources
                    </button>
                </div>
                <div className={styles.topics__content__text}>
                    {activeButton === 'notes' ? content.notes : content.resources}
                </div>
            </div>
        </div>
    );
}
