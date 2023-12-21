import React, { useState, useEffect } from 'react'
import styles from './chatTable.module.scss'
import deleteIcon from './../../../../assets/icons/trash_can.svg'


export default function ChatTable({time}) {
    const [displayContent, setDisplayContent] = useState('')
    const table = <table className={styles.chatTable}>
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
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Introduction to Python</td>
            <td>2 hours</td>
            <td><button><img alt='delete' src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Python Data Structure</td>
            <td>3 hours</td>
            <td><button><img alt='delete' src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Functions in Python</td>
            <td>4 hours</td>
            <td><button><img alt='delete' src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Python Modules and Packages</td>
            <td>30 hours</td>
            <td><button><img alt='delete' src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Object-Oriented Programming in Python</td>
            <td>25 hours</td>
            <td><button><img alt='delete' src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Error Handling in Python</td>
            <td>12 hours</td>
            <td><button><img alt='delete' src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>7</td>
            <td>Building the Rock, Scissors, Paper Game</td>
            <td>5 hours</td>
            <td><button><img alt='delete' src={deleteIcon} /></button></td>
        </tr>
    </tbody>
</table>
    useEffect(() => {
        setDisplayContent('')
      const timer = setTimeout(() => {
        setDisplayContent(table)
      },time)
      return () => {
        clearTimeout(timer)
      }
    }, [time])
    return (
            <div>{displayContent}</div>
    )
}
