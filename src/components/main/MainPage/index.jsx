import React from 'react'
import styles from './mainPage.module.scss'
import Intro from './Intro'
import Cases from './Cases'
import HowItWorks from './HowItWorks'
import Team from './Team'
import Form from './Form'
import Contacts from './Contacts'

export default function MainPage() {
    let visit = async () => {
        try {
            const ipResponse = await axios.get(`https://api.ipify.org?format=json`);
            const ip = ipResponse.data.ip;
            const csrfResponse = await axios.get(`https://artcogen.com/csrf-token`, {
                withCredentials: true,
            });
            const csrfToken = csrfResponse.data.csrfToken;
            const response = await axios.post(
                `https://artcogen.com/landing/visit`,
                {},
                {
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                        'ip': ip
                    },
                    withCredentials: true,
                    }
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.mainPage} onLoad={visit}>
            <div className={styles.mainPage__wrapper}>
                <Intro />
                <Cases />
                <HowItWorks />
                <Team />
                <Form />
                <Contacts />
            </div>
        </div>
    )
}
