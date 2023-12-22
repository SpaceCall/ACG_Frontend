import React from 'react';
import styles from './test.module.scss';

export default function Test() {
    const questions = [
        {
            id: 1,
            questionText: 'What does the term "optimization" mean in the context of programming?',
            type: 'radios',
            answers: [
                'Improving the performance and efficiency of a program.',
                'Increasing the number of functionalities of a program.',
                'Introducing new features into a program.',
            ],
        },
        {
            id: 2,
            questionText: 'You play rock scissors paper. If your opponent shows scissors, what do you need to show to win?',
            type: 'checkboxes',
            answers: [
                'rock',
                'bomb.',
                'paper',
            ],
        },
        {
            id: 3,
            questionText: 'Вased on the tips provided in the Optimizing the Game Code paragraph, you need to indicate and write the errors that were made in the code',
            type: 'openQuestion',
        },
    ];

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
            );
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
            );
        } else if (question.type === 'openQuestion') {
            return (
                <div className={styles.test__question__answers}>
                    <input type="text" placeholder="Type your answer" />
                </div>
            );
        }
    };

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
