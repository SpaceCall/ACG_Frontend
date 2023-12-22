import React from 'react';
import styles from './test.module.scss';
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { StreamLanguage } from "@codemirror/language";
import { python } from "@codemirror/legacy-modes/mode/python";

export default function Test() {
    
    return (
        <div className={styles.test}>
            <div className="container">
                <div className={styles.test__wrapper}>
                    <h2>Вased on the tips provided in the previous paragraph, you need to update your code</h2>
                    <CodeMirror
                    value={`def rock():
    return None`}
                    height="400px"
                    readOnly={false}
                    theme={okaidia}
                    extensions={[StreamLanguage.define(python)]}
                />
                    <button className={styles.test__question__submit}>Submit</button>
                </div>
            </div>
        </div>
    );
}
