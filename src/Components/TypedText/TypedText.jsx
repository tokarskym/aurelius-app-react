import { useRef, useEffect } from 'react';

export default function TypedText({ text }) {
  const typedText = useRef(null);
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      if (typedText.current) {
        typedText.current.innerText += text.charAt(i);
        i++;
        if (text.charAt(i) === ' ' || text.charAt(i) === '\n') {
          typedText.current.innerHTML += '&nbsp;';
        }
      }
      setTimeout(typeWriter, 50);
    }
  }

  useEffect(() => {
    typeWriter();
    if (!typedText.current) {
      console.error("Element z klasą 'typed-text' nie został znaleziony.");
      return;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="feeling-state">
      <div ref={typedText} className="typed-text"></div>
    </div>
  );
}
