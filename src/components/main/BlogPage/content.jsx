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
            <div className={styles.blog__content__text}></div>
        </div>
    )
}
