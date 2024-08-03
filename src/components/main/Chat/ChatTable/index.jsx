import React, { useState, useEffect, useMemo } from 'react';
import styles from './chatTable.module.scss';
import deleteIcon from './../../../../assets/icons/trash_can.svg';

export default function ChatTable({ time }) {
    const [displayContent, setDisplayContent] = useState('')
    const [expandedRow, setExpandedRow] = useState(null)

    const toggleRow = (index) => setExpandedRow(expandedRow === index ? null : index)

    const table = useMemo(() => (
        <table className={styles.chatTable}>
            <colgroup>
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Title</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {[
                    ['1', 'Introduction to Python', '2 hours'],
                    ['2', 'Python Data Structure', '3 hours'],
                    ['3', 'Functions in Python', '4 hours'],
                    ['4', 'Python Modules and Packages', '30 hours'],
                    ['5', 'Object-Oriented Programming in Python', '25 hours'],
                    ['6', 'Error Handling in Python', '12 hours'],
                    ['7', 'Building the Rock, Scissors, Paper Game', '5 hours'],
                ].map((data, index) => (
                    <tr
                        key={index}
                        onClick={() => toggleRow(index)}
                        className={expandedRow === index ? styles.activeRow : ''}
                    >
                        <td>{data[0]}</td>
                        <td>{data[1]}</td>
                        <td>{data[2]}</td>
                        <td className={styles.hideableColumn}>
                            <button>
                                <img alt="delete" src={deleteIcon} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ), [expandedRow]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayContent(table);
        }, time);
        return () => {
            clearTimeout(timer);
        };
    }, [time, table]);

    return <div>{displayContent}</div>;
}
