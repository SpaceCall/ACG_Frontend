import React, { useEffect, useState } from 'react'
import styles from './content.module.scss'
import image from './../../../../assets/icons/image.svg'
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { StreamLanguage } from "@codemirror/language";
import { python } from "@codemirror/legacy-modes/mode/python";

export default function Content({ isActive }) {
    const [activeButton, setActiveButton] = useState('notes')
    const makeActive = (button) => setActiveButton(button)

    useEffect(() => makeActive('notes'), [isActive])
    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    <h2>{isActive.lesson}<br /> {isActive.subtopic}</h2>
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
                    <p>
                        Python's syntax includes the structure of the language and the rules for writing correct programs.
                    </p>
                    <p>
                        Important aspects of Python's syntax are:
                    </p>
                    <p>
                        Comments start with the # symbol.
                    </p>
                    <CodeMirror
                        className={styles.сodeMirror}
                        value={'# This is a comment'}
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


                    Variables and Data Types in Python:

                    Variables in Python are created when values are assigned to them, and the data type is determined automatically. Python supports various data types, such as integers, floats, strings, lists, tuples, dictionaries, and others.

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


                    Basic Python Operators:

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
