import React from 'react'
import styles from './styles/index.module.scss'
import pythonBlog from '../../../assets/images/blogs/python-blog.png'

export default function Blogs() {
    return (
        <div className={styles.blogs}>
            <div className="container">
                <div className={styles.blogs__wrapper}>
                    <div className={styles.blogs__intro}>
                        <h2 className={styles.blogs__intro__title}><span>best</span> Blogs of the acg</h2>
                        <div className={styles.blogs__intro__blog}>
                            <div className={styles.blogs__intro__blog__image}>
                                <div className={styles.blogs__intro__blog__image__time}>
                                    <span>12 · 08 · 2023</span>
                                    <span>13 min read</span>
                                </div>
                                <div className={styles.blogs__intro__blog__image__pic}>
                                    <img src={pythonBlog} alt="Python" />
                                </div>
                            </div>
                            <div className={styles.blogs__intro__blog__info}>
                                <h2>Introduction to Python Programming: A Beginner's Guide</h2>
                                <p>In the ever-evolving landscape of technology, learning to code has become increasingly essential...</p>
                                <a href="">More</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogs__catalog}></div>
                </div>
            </div>
        </div>
    )
}
