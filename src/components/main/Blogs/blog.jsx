import React from 'react'

export default function Blog({ styles, blog }) {
    return (
        <div className={styles.blogs__catalog__wrapper__blog}>
            <div className={styles.blogs__catalog__wrapper__blog__image}>
                <div className={styles.blogs__catalog__wrapper__blog__image__time}>
                    <span>{blog.date}</span>
                    <span>{blog.mins} min read</span>
                </div>
                <div className={styles.blogs__catalog__wrapper__blog__image__pic}>
                    <img src={blog.imgSource} alt={blog.imgSource} />
                    <div className={styles.blogs__catalog__wrapper__blog__image__category}>{blog.category}</div>
                </div>
            </div>
            <div className={styles.blogs__catalog__wrapper__blog__info}>
                <p>{blog.description}</p>
            </div>
        </div>
    )
}
