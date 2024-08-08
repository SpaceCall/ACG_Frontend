import React, { useState, useMemo } from 'react';
import styles from './chatTable.module.scss';

const ChatTable = ({ data }) => {
  const [openBlock, setOpenBlock] = useState(null);

  const toggleBlock = (blockTitle) => {
    if (openBlock === blockTitle) {
      setOpenBlock(null);
    } else {
      setOpenBlock(blockTitle);
    }
  };

  const table = useMemo(() => (
    <table className={styles.chatTable}>
      <colgroup>
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
            </tr>
            {openBlock === blockTitle && data[blockTitle].map((topic, topicIndex) => (
              <tr key={`${index}-${topicIndex}`} className={`${styles.subRow} ${styles.animate}`}>
                <td>{index + 1}.{topicIndex + 1}</td>
                <td colSpan="2">{`${topic}`}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  ), [data, openBlock]);

  return (
    <div>{table}</div>
  );
};

export default ChatTable;
