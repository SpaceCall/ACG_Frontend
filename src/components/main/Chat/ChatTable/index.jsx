import React, { useState, useMemo } from 'react';
import styles from './chatTable.module.scss';
import arrow from '../../../../assets/icons/open_topic.svg';

const ChatTable = ({ data }) => {
    const [openBlocks, setOpenBlocks] = useState([]);

    const toggleBlock = (blockTitle) => {
        setOpenBlocks((prevOpenBlocks) =>
            prevOpenBlocks.includes(blockTitle)
                ? prevOpenBlocks.filter((title) => title !== blockTitle)
                : [...prevOpenBlocks, blockTitle]
        );
    };

    const table = useMemo(
        () => (
            <div className={styles.chatTable}>
                <div className={styles.chatTable__header}>
                    <p className={styles.chatTable__header__column}>№</p>
                    <p className={styles.chatTable__header__column}>Title</p>
                    <p className={styles.chatTable__header__column}>Subtopics</p>
                </div>
                <div className={styles.chatTable__body}>
                    {Object.keys(data).map((blockTitle, index) => (
                        <React.Fragment key={index}>
                            <div
                                onClick={() => toggleBlock(blockTitle)}
                                className={`${styles.chatTable__body__row} ${openBlocks.includes(blockTitle) ? styles.open : ''}`}
                            >
                                <div className={styles.chatTable__body__row__content}>
                                    <p><span>{index + 1}</span></p>
                                    <p><span>{blockTitle}</span></p>
                                    <p><span>{data[blockTitle].length} Subtopics</span></p>
                                    <span>
                                        <img
                                            src={arrow}
                                            alt=""
                                            className={`${styles.chatTable__body__row__arrow} ${openBlocks.includes(blockTitle)
                                                    ? styles.chatTable__body__row__arrow__open
                                                    : styles.chatTable__body__row__arrow__closed
                                                }`}
                                        />
                                    </span>
                                </div>
                                <div className={`${styles.chatTable__body__row__accordion} ${openBlocks.includes(blockTitle) ? styles.open : ''}`}>
                                    {data[blockTitle].map((topic, topicIndex) => (
                                        <div key={`${index}-${topicIndex}`} className={styles.chatTable__body__row__accordion__subrow}>
                                            <p>{index + 1}.{topicIndex + 1}</p>
                                            <p>{topic}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ),
        [data, openBlocks]
    );

    return <div>{table}</div>;
};

export default ChatTable;
