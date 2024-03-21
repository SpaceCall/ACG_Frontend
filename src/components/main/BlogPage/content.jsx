import React, { useState } from 'react'
import data from './data'

export default function Content({ styles }) {
    const [activeItemId, setActiveItemId] = useState(1);

    const handleItemClick = (id) => {
        setActiveItemId(id === activeItemId ? null : id);
    }

    return (
        <div className={styles.blog__content}>
            <div className={styles.blog__content__table}>
                <h2 className={styles.blog__content__table__title}>Table of content</h2>
                <ul className={styles.blog__content__table__list}>
                    {data.tableItems.map((tableItem) => (
                        <li
                            key={tableItem.id}
                            className={activeItemId === tableItem.id ? styles.active : ''}
                            onClick={() => handleItemClick(tableItem.id)}
                        >
                            {tableItem.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.blog__content__text}>
                {data.contentItems.map((textBlock) => (
                    <div key={textBlock.id} className={styles.blog__content__text__block}>
                        <h2 className={styles.blog__content__text__block__title}>{textBlock.title && textBlock.title}</h2>
                        <h3 className={styles.blog__content__text__block__subtitle}>{textBlock.subtitleTop && textBlock.subtitleTop}</h3>
                        <p className={styles.blog__content__text__block__paragraph}>{textBlock.description && textBlock.description}</p>
                        <h3 className={styles.blog__content__text__block__subtitle}>{textBlock.subtitleBottom && textBlock.subtitleBottom}</h3>
                        <div className={styles.blog__content__text__block__code}>
                            <ul>
                                {textBlock.code && textBlock.code.map((codeStr, index) => (
                                    <li key={index}>{codeStr}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
