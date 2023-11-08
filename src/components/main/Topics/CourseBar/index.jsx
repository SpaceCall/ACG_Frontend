import React, { useState } from 'react';
import styles from './course.bar.scss'; // 
import data from './recieved.data'
import text_icon from './../../../../assets/icons/text_icon_b.svg'
import video_icon from './../../../../assets/icons/video_icon.svg'
import complete_icon from './../../../../assets/icons/complete_icon.svg'

const DropdownList = ({ setIsActive }) => {
  const [isOpen, setIsOpen] = useState({});

  const handleItemClick = (item) => {
    setIsOpen(prevState => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const openSubtopic = (item) => setIsActive(item)

  const items = data.content.map((item) => {
    return (
      <div className={styles.dropdownContainer} key={item.title}>
        <div className={`list-item ${isOpen[item.title] ? 'active' : ''}`} onClick={() => handleItemClick(item.title)}>
          <img src={`${complete_icon}`} alt="imageicon" />
          <div className={`courseTitle`}>{item.title}</div>
        </div>
        {isOpen[item.title] && (
          <div className={styles.dropdownSublist}>
            {item.content.map((subitem, index) => (
              <div key={index} onClick={() => openSubtopic(subitem)} className={`sublist-item`}>
                <img src={`${subitem.type === 'video' ? `${video_icon}` : `${text_icon}`}`} alt="imageicon" />
                <div>
                  <div className={`courseTitle`}>{subitem.subtopic}</div>
                  <div className={`courseSubtitle`}>{subitem.type === 'video' ? `Video: 10 min` : `Reading: 10 min`}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className={styles.dropdownContainer}>
      {items}
    </div>
  );
};

export default DropdownList;

