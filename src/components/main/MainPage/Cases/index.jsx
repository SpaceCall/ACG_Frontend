import React from 'react';
import styles from './cases.module.scss';
import { FormattedMessage } from 'react-intl';

export default function Cases() {
    const list = [
        {
            title: ["landing.main.cases.first.title.firstPart", "landing.main.cases.first.title.secondPart"],
            description: "landing.main.cases.first.description"
        },
        {
            title: ["landing.main.cases.second.title.firstPart", "landing.main.cases.second.title.secondPart"],
            description: "landing.main.cases.second.description"
        },
        {
            title: ["landing.main.cases.third.title.firstPart", "landing.main.cases.third.title.secondPart"],
            description: "landing.main.cases.third.description"
        },
    ];

    return (
        <div id='cases' className={styles.cases}>
            <div className="container">
                <h2>
                    <FormattedMessage id="landing.main.cases.title.firstPart" /> <span>
                        <FormattedMessage id="landing.main.cases.title.secondPart" />
                    </span>
                </h2>
                <div className={styles.cases__wrapper}>
                    <ul className={styles.cases__list}>
                        {list.map((listItem, index) => (
                            <li key={index} className={styles.cases__list__item}>
                                <div className={styles.cases__list__item__info}>
                                    <h3>
                                        <span>
                                            <FormattedMessage id={listItem.title[0]} />
                                        </span>
                                        <span>
                                            <FormattedMessage id={listItem.title[1]} />
                                        </span>
                                    </h3>
                                    <p>
                                        <FormattedMessage id={listItem.description} />
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
