import React, { useState, useEffect } from 'react';
import './typewriter.css'; // Optional: for custom styling

const TypewriterEffect = ({ text, breaktext }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    const fullText = text + '\n' + breaktext;
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        if (fullText[index] === '\n') {
          setDisplayedText(prev => prev + '<br/>');
        } else {
          setDisplayedText(prev => prev + fullText[index]);
        }
        setIndex(prev => prev + 1);
      }, 100); // Adjust the typing speed here
      return () => clearTimeout(timer);
    }
  }, [index, text, breaktext]);

  return (
    <div className="typewriter-effect" dangerouslySetInnerHTML={{ __html: displayedText }}></div>
  );
};

export default TypewriterEffect;
