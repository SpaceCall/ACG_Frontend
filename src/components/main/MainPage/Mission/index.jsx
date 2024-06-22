import React from 'react';
import styles from './mission.module.scss';
import { FormattedMessage } from 'react-intl';

export default function Mission() {
    return (
        <div className={styles.mission}>
            <div className="container">
                <div className={styles.mission__wrapper}>
                    <h2>
                        <FormattedMessage id="landing.main.mission.title.firstPart" /> <span>
                            <FormattedMessage id="landing.main.mission.title.secondPart" />
                        </span>
                    </h2>
                    <div className={styles.mission__description}>
                        <p>
                            <span><FormattedMessage id="landing.main.mission.first.paragraph.firstPart" /></span> 
                            <FormattedMessage id="landing.main.mission.first.paragraph.secondPart" />
                        </p>
                        <p>
                            <span><FormattedMessage id="landing.main.mission.second.paragraph.firstPart" /></span> 
                            <FormattedMessage id="landing.main.mission.second.paragraph.secondPart" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
