import React from 'react'
import styles from './mission.module.scss'

export default function Mission() {
    return (
        <div className={styles.mission}>
            <div className="container">
                <div className={styles.mission__wrapper}>
                    <h2>Mission and Vision</h2>
                    <p>Our mission is to inspire and assist individuals in achieving their educational goals. We believe that learning should be accessible, effective, and engaging. Our vision is to create an innovative platform that enables every person to find the best way to learn, access relevant materials, and elevate their knowledge. We aspire to simplify and personalize education, promoting self-development and growth for each person. Our platform will be a reliable partner in learning, providing tools and resources for success in education and work, regardless of one's experience or opportunities.</p>
                </div>
            </div>
        </div>
    )
}
