import React from 'react'
import styles from './styles/index.module.scss'
import pythonBlog from '../../../assets/images/blogs/python-blog.png'
import Content from './content'

export default function BlogPage() {
    return (
        <div className={styles.blog}>
            <div className="container">
                <div className={styles.blog__wrapper}>
                    <div className={styles.blog__intro}>
                        <div className={styles.blog__intro__info}>
                            <span>12 · 08 · 2023</span>
                            <h2>Introduction to Python Programming: A Beginner's Guide</h2>
                            <div className={styles.blog__intro__info__categories}>
                                <div>Development</div>
                                <div>Python</div>
                            </div>
                        </div>
                        <div className={styles.blog__intro__image}>
                            <img src={pythonBlog} alt="Python" />
                        </div>
                    </div>
                    <Content styles={styles} />
                </div>
            </div>
        </div>
    )
}
