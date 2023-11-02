import React from 'react'
import styles from './loader.module.scss'

export default function Loader() {
  return (
    <span>
      <div className={styles.loading_frame}>
        <div className={styles.loading}>
          <div></div>
        </div>
      </div>
    </span>
  )
}
