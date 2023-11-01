import React, { useState } from 'react'
import styles from './asideButton.module.scss'
import arrow from './../../../../../assets/icons/aside-chat-arrow.svg'
import arrowReversed from './../../../../../assets/icons/aside-chat-arrow-reversed.svg'

export default function AsideButton({ isOpened, setIsOpened, chatRef }) {
    const [isDragged, setIsDragged] = useState(false)
    const [isOverButton, setIsOverButton] = useState(false)
    const toggleChat = () => setIsOpened(!isOpened)
    
    let startX = 0;

    const dragChat = (e) => {
        setIsDragged(true)
        setIsOverButton(true)
        startX = e.clientX;
    }

    const dropChat = () => {
        setIsDragged(false)
        setIsOverButton(false)
    }

    const moveChat = (e) => {
        if (isDragged && isOverButton) {
            const chatStyles = getComputedStyle(chatRef.current)
            const containerWidth = chatRef.current.parentElement.clientWidth
            const currentLeft = parseFloat(chatStyles.getPropertyValue('left'))
            
            const percentDelta = (e.clientX - startX) / containerWidth * 100
            let newLeft = currentLeft + percentDelta
            
            newLeft = Math.min(Math.max(newLeft, 0), 100)
            
            chatRef.current.style.left = `${newLeft}%`
            
            startX = e.clientX

        }
    }

    return (
        <button
            className={styles.asideButton}
            onClick={toggleChat}
            onMouseDown={dragChat}
            onMouseMove={moveChat}
            onMouseUp={dropChat}
            onMouseLeave={() => setIsOverButton(false)}
        >
            <img src={isOpened ? arrowReversed : arrow} alt="Show" />
        </button>
    )
}
