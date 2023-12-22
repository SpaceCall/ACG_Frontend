import React from 'react';
import styles from './test.module.scss';

export default function Test() {
    const questions = [
        {
            id: 1,
            questionText: 'Which of the following comments are valid in Python?',
            type: 'radios',
            answers: [
                '// This is a comment',
                '# This is a comment',
                '/* This is a comment */',
                '-- This is a comment'
            ],
            correctAnswer: 2
        },
        {
            id: 2,
            questionText: 'What is the correct way to declare a variable in Python?',
            type: 'radios',
            answers: [
                'int x = 5',
                'x = 5',
                'var x = 5',
                'declare x = 5'
            ],
            correctAnswer: 2
        },
        {
            id: 3,
            questionText: 'What is the output of the following Python code?',
            type: 'radios',
            answers: [
                'code',
                'x = 5',
                'y = 3',
                'print(x + y)'
            ],
            correctAnswer: 1
        },
        {
            id: 4,
            questionText: 'Which of the following is a valid way to perform division in Python?',
            type: 'radios',
            answers: [
                'x = 10 / 2',
                'x = 10 divide 2',
                'x = 10 ÷ 2',
                'x = divide(10, 2)'
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            questionText: 'Which of the following is a valid if statement in Python?',
            type: 'radios',
            answers: [
                'if x > 5: print("x is greater than 5")',
                'if (x > 5) then print("x is greater than 5")',
                'if x > 5 then print("x is greater than 5")',
                'if x > 5 print("x is greater than 5")'
            ],
            correctAnswer: 1
        },
        {
            id: 6,
            questionText:
                <>
                    <p>
                        Your task is to create a program to analyze data from a web server log file.
                    </p>
                    <p>
                        The program must be able to:
                        <ul>
                            <li>
                                Read data from the file.
                            </li>
                            <li>
                                Use regular expressions to extract the necessary information.
                            </li>
                            <li>
                                Save the processed data to a new file.
                            </li>
                            <li>
                                Display the results on the screen.
                            </li>
                            <li>
                                Handle exceptional situations that may arise during program operation.
                            </li>
                        </ul>
                    </p>
                </>,
            type: 'openQuestion',
        },
    ]

    const renderAnswers = (question) => {
        if (question.type === 'radios') {
            return (
                <div className={styles.test__question__answers}>
                    {question.answers.map((answer) => (
                        <label key={answer} className={styles.test__question__answer}>
                            <input type="radio" name={`question${question.id}`} value={answer} />
                            {answer}
                        </label>
                    ))}
                </div>
            )
        } else if (question.type === 'checkboxes') {
            return (
                <div className={styles.test__question__answers}>
                    {question.answers.map((answer) => (
                        <label key={answer} className={styles.test__question__answer}>
                            <input type="checkbox" name={`question${question.id}`} value={answer} />
                            {answer}
                        </label>
                    ))}
                </div>
            )
        } else if (question.type === 'openQuestion') {
            return (
                <div className={styles.test__question__answers}>
                    <input type="text" placeholder="Type your answer" />
                </div>
            )
        }
    }

    return (
        <div className={styles.test}>
            <div className="container">
                <div className={styles.test__wrapper}>
                    <h2>Test</h2>
                    <div className={styles.test__questions}>
                        {questions.map((question) => (
                            <div key={question.id} className={styles.test__question}>
                                <h3 className={styles.test__question__number}>Question №{question.id}</h3>
                                <p className={styles.test__question__questionText}>{question.questionText}</p>
                                {renderAnswers(question)}
                            </div>
                        ))}
                    </div>
                    <button className={styles.test__question__submit}>Submit</button>
                </div>
            </div>
        </div>
    );
}
