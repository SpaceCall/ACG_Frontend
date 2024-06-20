import React, { useState } from 'react'
import styles from './styles/index.module.scss'
import pythonBlog from '../../../assets/images/blogs/python-blog.png'
import Blog from './blog'

export default function Blogs() {
    const [activeCategory, setActiveCategory] = useState('All')
    const categories = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Development' },
        { id: 3, name: 'Software' },
        { id: 4, name: 'Process' }
    ]

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
    }

    const blogs = [
        {
            id: 1,
            date: '12.08.2023',
            mins: '13',
            imgSource: pythonBlog,
            category: 'Development',
            description: "Introduction to Python Programming: A Beginner's Guide"
        },
        {
            id: 2,
            date: '12.08.2023',
            mins: '13',
            imgSource: pythonBlog,
            category: 'Development',
            description: "Introduction to Python Programming: A Beginner's Guide"
        },
        {
            id: 3,
            date: '12.08.2023',
            mins: '13',
            imgSource: pythonBlog,
            category: 'Development',
            description: "Introduction to Python Programming: A Beginner's Guide"
        },
        {
            id: 4,
            date: '12.08.2023',
            mins: '13',
            imgSource: pythonBlog,
            category: 'Development',
            description: "Introduction to Python Programming: A Beginner's Guide"
        }
    ]

    const totalPages = 8
    const visiblePages = [1, 2, 7, 8]
    const ellipsis = '...'

    return (
        <div className={styles.blogs}>
            <div className="container">
                <div className={styles.blogs__wrapper}>
                    {/* <div className={styles.blogs__intro}>
                        <h2 className={styles.blogs__intro__title}><span>best</span> Blogs of the acg</h2>
                        <div className={styles.blogs__intro__blog}>
                            <div className={styles.blogs__intro__blog__image}>
                                <div className={styles.blogs__intro__blog__image__time}>
                                    <span>12 · 08 · 2023</span>
                                    <span>13 min read</span>
                                </div>
                                <div className={styles.blogs__intro__blog__image__pic}>
                                    <img src={pythonBlog} alt="Python" />
                                    <div className={styles.blogs__intro__blog__image__category}>Development</div>
                                </div>
                            </div>
                            <div className={styles.blogs__intro__blog__info}>
                                <h2>Introduction to Python Programming: A Beginner's Guide</h2>
                                <p>In the ever-evolving landscape of technology, learning to code has become increasingly essential...</p>
                                <a href="">More</a>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.blogs__catalog}>
                        <h2 className={styles.blogs__catalog__title}>Blog Posts</h2>
                        {/* <nav className={styles.blogs__catalog__categories}>
                            <ul className={styles.blogs__catalog__categories__list}>
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <div className={activeCategory === category.name ? styles.active : ''} onClick={() => handleCategoryClick(category.name)}>{category.name}</div>
                                    </li>
                                ))}
                            </ul>
                        </nav> */}
                        <div className={styles.blogs__catalog__wrapper}>
                            {/* {blogs.map((blog) => (
                                <Blog key={blog.id} styles={styles} blog={blog} />
                            ))} */}
                            Coming Soon...
                        </div>
                    </div>
                    <div className={styles.blogs__pagination}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
