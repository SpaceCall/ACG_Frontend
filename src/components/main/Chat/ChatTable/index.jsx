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
                        <th>Subtopics</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((blockTitle, index) => (
                        <React.Fragment key={index}>
                            <tr
                                onClick={() => toggleBlock(blockTitle)}
                                className={styles.blockRow}
                            >
                                <td>{index + 1}</td>
                                <td>{blockTitle}</td>
                                <td>{data[blockTitle].length} Subtopics</td>
                                <td>
                                    <img
                                        src={arrow}
                                        alt=""
                                        className={`${styles.blockRow__arrow} ${
                                            openBlocks.includes(blockTitle)
                                                ? styles.blockRow__arrow__open
                                                : styles.blockRow__arrow__closed
                                        }`}
                                    />
                                </td>
                            </tr>
                            {openBlocks.includes(blockTitle) &&
                                data[blockTitle].map((topic, topicIndex) => (
                                    <tr key={`${index}-${topicIndex}`} className={styles.subRow}>
                                        <td>{index + 1}.{topicIndex + 1}</td>
                                        <td colSpan="3">{topic}</td>
                                    </tr>
                                ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        ),
        [data, openBlocks]
    );

    return <div>{table}</div>;
};

export default ChatTable;
