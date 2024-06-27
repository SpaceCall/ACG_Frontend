import React, { useState, useEffect, useRef } from 'react';
import Loader from '../Loader';
import api from '../../../../../service/api';

export default function BotMessage({ text, time, enableSubmit, chatId, setChatId,disable }) {
  const [displayText, setDisplayText] = useState('');
  const [textBot, setTextBot] = useState('');
  const loader = <Loader />;
  const hasTyped = useRef(false);

  useEffect(() => {
    if (!hasTyped.current) {
      console.log(chatId)
      hasTyped.current = true;
      if(disable == true){
        setTextBot(text)
      }else{
        const waitMessage = async () => {
          setDisplayText(loader);
          try {
            console.log(text);
            const response = await api.chat(chatId, JSON.stringify({ message: text }));
            console.log(response);
            setChatId(response.chatId);
            setTextBot(response.text);
          } catch (error) {
            console.error('Error during fetching bot message', error);
          }
        };
        waitMessage();
      }
    }
  }, []);

  useEffect(() => {
    if (textBot) {
      typeMachine();
    }
  }, [textBot]);

  const typeMachine = () => {
    setDisplayText(textBot[0]);
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + textBot[index]);
      index += 1;
      if (index === textBot.length-1) {
        enableSubmit();
        clearInterval(interval);
      }
    }, time / textBot.length);
  };

  return <span>{displayText}</span>;
}
