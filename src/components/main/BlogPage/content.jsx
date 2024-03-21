import React, { useState, useEffect } from 'react';
import data from './data';

export default function Content({ styles }) {
    const [activeItemId, setActiveItemId] = useState(1)
    const [isSticky, setIsSticky] = useState(false)

    const handleItemClick = (id) => {
        setActiveItemId(id)
    }

    const scrollActiveItemChange = (id) => {
        setActiveItemId(id)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsSticky(scrollPosition >= 695)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={styles.blog__content}>
            <div className={`${styles.blog__content__table} ${isSticky ? styles.sticky : ''}`}>
                <h2 className={styles.blog__content__table__title}>Table of content</h2>
                <ul className={styles.blog__content__table__list}>
                    {data.tableItems.map((tableItem) => (
                        <li
                            key={tableItem.id}
                            className={activeItemId === tableItem.id ? styles.active : ''}
                            onClick={() => handleItemClick(tableItem.id)}
                        >
                            <a href={`#${tableItem.id}`}>{tableItem.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.blog__content__text}>
                {data.contentItems.map((textBlock) => (
                    <div key={textBlock.id} className={styles.blog__content__text__block}>
                        {textBlock.title && <h2 id={textBlock.id} className={styles.blog__content__text__block__title}>{textBlock.title}</h2>}
                        {textBlock.subtitleTop && <h3 className={styles.blog__content__text__block__subtitle}>{textBlock.subtitleTop}</h3>}
                        {textBlock.description && <p className={styles.blog__content__text__block__paragraph}>{textBlock.description}</p>}
                        {textBlock.subtitleBottom && <h3 className={styles.blog__content__text__block__subtitle}>{textBlock.subtitleBottom}</h3>}
                        {textBlock.code && <div className={styles.blog__content__text__block__code}>
                            <ul>
                                {textBlock.code.map((codeLine, index) => (
                                    <li key={index} style={{ marginLeft: `${codeLine.tabs * 20}px` }}>
                                        {codeLine.text}
                                    </li>
                                ))}
                            </ul>
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
