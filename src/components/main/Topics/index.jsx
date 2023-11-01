import React from 'react'
import styles from './topics.module.scss'
import AsideChat from './AsideChat'
import Content from './Content'
import Path from './Path'

export default function Topics() {
    return (
        <div className={styles.topics}>
            <Path />
            <Content />
            <AsideChat />
        </div>
    )
}
