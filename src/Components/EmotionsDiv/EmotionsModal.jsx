import TypedText from '../TypedText/TypedText';

import { useState } from 'react';

export default function EmotionsModal({ textValue, onTextAreaChange, onSaveClick, setShowModal }) {
  const text = 'Dlaczego się tak \nczujesz?';

  const [isEmpty, setIsEmpty] = useState(true);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleTextAreaChange = (event) => {
    onTextAreaChange(event);
    setIsEmpty(event.target.value === '');
  };

  const handleCloseButtonClick = () => {
    setShowModal(false);
    onTextAreaChange({ target: { value: '' } });
    setIsEmpty(true);
  };

  const handleSaveClick = () => {
    if (isEmpty) {
      setShowPlaceholder(true);
      setTimeout(() => {
        setShowPlaceholder(false);
      }, 3000);
    } else {
      onSaveClick();
    }
  };

  return (
    <div className="modal-content">
      <TypedText text={text} />
      <span className="modal-close-button" onClick={handleCloseButtonClick}>
        X
      </span>
      <div className="modal-body">
        <div className={`blinking ${isEmpty ? 'visible' : 'hidden'}`}></div>
        <textarea value={textValue} onChange={handleTextAreaChange} placeholder={showPlaceholder ? 'Nie można zapisać emocji, bez wyjaśnienia' : ''} className="text-area-style" />
        <button onClick={handleSaveClick} className="button-style save-button button-hover">
          Zapisz
        </button>
      </div>
    </div>
  );
}
