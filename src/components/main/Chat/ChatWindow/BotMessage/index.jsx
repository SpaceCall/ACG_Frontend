import React, { useState, useEffect } from 'react'
import Loader from '../Loader'

export default function BotMessage({ text,time }) {
  const [displayText, setDisplayText] = useState('')
  const loader = <Loader />
  useEffect(() => {
    setDisplayText(loader)
    const timer = setTimeout(() => {
      typeMachine()
    }, time)
    console.log(displayText.length)
    return () => {
      clearTimeout(timer)
    }
  }, [text])

  const typeMachine = () => {
    setDisplayText('')
    let index = -1;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index += 1;

      if (index === text.length-1) {
        clearInterval(interval);
      }
    }, time / text.length);
  };
  return <span>{displayText}</span>;
}
