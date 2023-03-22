import TypedText from '../TypedText/TypedText';
import { useState } from 'react';

export default function EmotionsModal({ textValue, onTextAreaChange, onSaveClick, setShowModal }) {
  const text = 'Dlaczego się tak \nczujesz?';
  const [isEmpty, setIsEmpty] = useState(true);

  const handleTextAreaChange = (event) => {
    onTextAreaChange(event);
    setIsEmpty(event.target.value === '');
  };

  return (
    <div className="modal-content">
      <TypedText text={text} />
      <span className="modal-close-button" onClick={() => setShowModal(false)}>
        X
      </span>
      <div className="modal-body">
        <div className={`blinking ${isEmpty ? 'visible' : 'hidden'}`}></div>
        <textarea value={textValue} onChange={handleTextAreaChange} className={`text-area-style ${isEmpty ? 'empty' : ''}`} />
        <button onClick={onSaveClick} className="button-style save-button">
          Zapisz
        </button>
      </div>
    </div>
  );
}

