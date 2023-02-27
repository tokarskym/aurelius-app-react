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
    if (!typedText.current) {
      console.error("The element with the id 'typed-text' was not found in the document.");
      return;
    }
    typeWriter();
  }, []);

  return (
    <div className="feeling-state">
      <h1 ref={typedText} className="typed-text"></h1>
    </div>
  );
}
