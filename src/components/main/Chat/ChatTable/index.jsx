import React, { useState, useMemo } from 'react';
import styles from './chatTable.module.scss';
import arrow from '../../../../assets/icons/open_topic.svg';

const ChatTable = ({ data }) => {
  const [openBlocks, setOpenBlocks] = useState([]);

  const toggleBlock = (blockTitle) => {
    if (openBlocks.includes(blockTitle)) {
      setOpenBlocks(openBlocks.filter((title) => title !== blockTitle));
    } else {
      setOpenBlocks([...openBlocks, blockTitle]);
    }
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
              <tr onClick={() => toggleBlock(blockTitle)} className={styles.blockRow}>
                <td>{index + 1}</td>
                <td>{blockTitle}</td>
                <td>{data[blockTitle].length} Subtopics</td>
                <td>
                  <img src={arrow} alt="" />
                </td>
              </tr>
              {openBlocks.includes(blockTitle) &&
                data[blockTitle].map((topic, topicIndex) => (
                  <tr key={`${index}-${topicIndex}`} className={`${styles.subRow} ${styles.animate}`}>
                    <td>{index + 1}.{topicIndex + 1}</td>
                    <td colSpan="2">{topic}</td>
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
