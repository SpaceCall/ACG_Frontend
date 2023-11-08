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
            <th>Topic</th>
            <th>Description</th>
            <th>Duration</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Topic 1</td>
            <td>Description</td>
            <td>1 week</td>
            <td><button><img src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>Topic 2</td>
            <td>Description</td>
            <td>1 week</td>
            <td><button><img src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>Topic 3</td>
            <td>Description</td>
            <td>1 week</td>
            <td><button><img src={deleteIcon} /></button></td>
        </tr>
        <tr>
            <td>Topic 4</td>
            <td>Description</td>
            <td>1 week</td>
            <td><button><img src={deleteIcon} /></button></td>
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
    }, [])
    return (
            <div>{displayContent}</div>
    )
}
