import React from 'react'
import styles from './cases.module.scss'

export default function Cases() {
    return (
        <div className={styles.cases}>
            <h2>Use Cases</h2>
            <table className={styles.cases__table}>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th><div>Use Cases</div></th>
                        <th><div>Consult with the mentor-chatbot.</div></th>
                        <th><div>Welcome to <span>ACG</span> - the innovative platform that empowers you to take control of your learning journey.</div></th>
                        <th><div>Say goodbye to one-size-fits-all learning, and embrace a personalized approach to education.</div></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* cases */}
                    </tr>
                    <tr>
                        {/* cases */}
                    </tr>
                    <tr>
                        {/* cases */}
                    </tr>
                    <tr>
                        {/* cases */}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
