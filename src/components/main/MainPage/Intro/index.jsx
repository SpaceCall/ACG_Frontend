import React from 'react'
import styles from './intro.module.scss'
import axios from 'axios';

export default function Intro() {
    const handleLearnMoreClick  = async (e) =>{
        try {
          const ipResponse = await axios.get(`https://api.ipify.org?format=json`);
          const ip = ipResponse.data.ip;

            const csrfResponse = await axios.get(`https://artcogen.com/csrf-token`,{
              withCredentials: true, 
            });
            const csrfToken = csrfResponse.data.csrfToken;
            // Отправка запроса на сервер
            const response = await axios.post(
              `https://artcogen.com/landing/learnMoreClick`,
              {},
              {
                headers: {
                  'X-CSRF-TOKEN': csrfToken, 
                  'ip': ip
                },
                withCredentials: true,
              }
            );
        }
        catch (error) {
            console.log(error)
        }

    };
    const handleGetDemoClick  = async (e) =>{
        try {
          const ipResponse = await axios.get(`https://api.ipify.org?format=json`);
            const ip = ipResponse.data.ip;
            const csrfResponse = await axios.get(`https://artcogen.com/csrf-token`,{
              withCredentials: true, 
            });
            const csrfToken = csrfResponse.data.csrfToken;
            // Отправка запроса на сервер
            const response = await axios.post(
              `https://artcogen.com/landing/getDemoClick`,
              {},
              {
                headers: {
                  'X-CSRF-TOKEN': csrfToken, 
                  'ip': ip
                },
                withCredentials: true,
              }
            );
        }
        catch (error) {
            console.log(error)
        }

    };
    return (
        <div id='intro' className={styles.intro}>
            <div className="container">
                <h1>Unlock Your Learning Potential with ACG</h1>
                <p className={styles.intro__personalized}>Personalized сourses Tailored Just for You</p>
                <div className={styles.intro__buttons}>
                    <a href='#form' className={styles.intro__buttons__course} onClick={handleGetDemoClick}>Get a demo</a>
                    <a href='#howitworks' className={styles.intro__buttons__learn} onClick={handleLearnMoreClick}>Learn more</a>
                </div>
            </div>
        </div>
    )
}
