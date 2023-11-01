import React, { useState } from 'react';
import styles from './course.bar.scss'; // 
import data from './recieved.data'
import text_icon from './../../../../assets/icons/text_icon_b.svg'
import video_icon from './../../../../assets/icons/video_icon.svg'
import complete_icon from './../../../../assets/icons/complete_icon.svg'

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState({});

  const handleItemClick = (item) => {
    setIsOpen(prevState => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const items = data.content.map((item) => {
    return (
      <div className={styles.dropdownContainer} key={item.title}>
        <div className={`list-item ${isOpen[item.title] ? 'active' : ''}`} onClick={() => handleItemClick(item.title)}>
          <img src={`${complete_icon}`} alt="Image" />
          <div className={`courseTitle`}>{item.title}</div>
        </div>
        {isOpen[item.title] && (
          <div className={styles.dropdownSublist}>
            {item.content.map((subitem) => (
              <div className={`sublist-item ${styles.sublistItem}`}>
                <img src={`${subitem.type === 'video' ? `${video_icon}` : `${text_icon}`}`} alt="Image" />
                <div>
                  <div className={`courseTitle`}>{subitem.title}</div>
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

