import React, { useState, useEffect } from 'react';

const TypingWords = ({
  words = [],
  speed = 100,
  pause = 1500,
  loop = true,
  cursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const fullText = currentWord ? currentWord : ''; // Ensure word is defined
      
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, index - 1));
        setIndex((prev) => prev - 1);
      } else {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      }

      // When the word is fully typed out
      if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), pause);
      }

      // When the word is fully deleted
      if (isDeleting && index === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    if (words.length > 0) {
      timeout = setTimeout(handleTyping, speed);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, words, wordIndex, speed, pause]);

  return (
    <div>
      {displayedText}
      {cursor && <span className="blinking-cursor">|</span>}
    </div>
  );
};

export default TypingWords;
