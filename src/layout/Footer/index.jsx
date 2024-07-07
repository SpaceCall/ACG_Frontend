import React from 'react'
import styles from './styles/index.module.scss'
import Medias from '../../components/shared/Medias'
import { FormattedMessage } from 'react-intl';

export default function Footer() {
    const year = new Date()
    const profileLinks = {
        linkedin: 'https://www.linkedin.com/company/artcogen',
        telegram: 'https://t.me/+wi5Klp_TDCpmN2Vi'
    }

    return (
        <div id='contacts' className={styles.footer}>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__footer}>
                <p>© {year.getFullYear()} ACG. <FormattedMessage id='footer.rights'></FormattedMessage>.</p>
                <Medias profileLinks={profileLinks} />
            </div>
        </div>  
    )
}
