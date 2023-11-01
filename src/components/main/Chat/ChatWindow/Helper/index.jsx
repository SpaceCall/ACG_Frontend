import React, { useState, useEffect } from 'react';
import Loader from '../Loader'

export default function Helper({ text }) {
  const [displayText, setDisplayText] = useState('');
    const loader = <Loader />
  useEffect(() => {
    setDisplayText(loader)
    const timer = setTimeout(() => {
      setDisplayText(text);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);
  return <span>{displayText}</span>;
}
