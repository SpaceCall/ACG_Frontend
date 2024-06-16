import React from 'react'
import styles from './mission.module.scss';

export default function Mission() {
    return (
        <div className={styles.mission}>
            <div className="container">
                <div className={styles.mission__wrapper}>
                    <h2>Mission & <span>vision</span></h2>
                    <div className={styles.mission__description}>
                        <p><span>Inspire</span> and assist individuals in achieving educational goals through accessible, effective, and engaging learning experiences. </p>
                        <p><span>Create</span> an innovative platform for personalized education, simplifying access to relevant materials and promoting self-development for everyone, regardless of experience or opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
