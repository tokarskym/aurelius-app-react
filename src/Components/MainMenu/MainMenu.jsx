import NavbarLogo from '../../Images/MainMenu/Navbar/navbar-logo.png';
import EmotionsList from '../EmotionsDiv/EmotionsList';
import TypedText from '../TypedText/TypedText';
import { useState } from 'react';
import EmotionsModal from '../EmotionsDiv/EmotionsModal';
import ThoughtsTrap from '../ThoughtsTraps/ThoughtsTrap';
import ChallengeOfTheDay from '../ChallengeOfTheDay/ChallengeOfTheDay';
import DiscomfortTraining from '../DiscomfortTraining/DiscomfortTraining';
import NegativeContemplation from '../NegativeContemplation/NegativeContemplation';
import StoicQuotes from '../StoicQuotes/StoicQuotes';
import Journal from '../Journal/Journal';

export default function MainMenu() {
  const text = 'Cześć,\njak się teraz czujesz?';
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [textValue, setTextValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setShowModal(true);
  };

  const handleTextAreaChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSaveClick = () => {
    // Do something with selectedEmotion and textValue
    console.log('Selected Emotion:', selectedEmotion);
    console.log('Text Value:', textValue);
    setShowModal(false);
    setTextValue('');
  };

  return (
    <div className="container">
      <nav>
        <img src={NavbarLogo} alt="Navbar logo app" />
      </nav>
      <TypedText text={text} />
      <div className="emotions-container">
        <EmotionsList onEmotionClick={onEmotionClick} />
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-background" onClick={() => setShowModal(false)} />
          <EmotionsModal
            selectedEmotion={selectedEmotion}
            textValue={textValue}
            onTextAreaChange={handleTextAreaChange}
            onSaveClick={handleSaveClick}
            setShowModal={setShowModal}
          />
        </div>
      )}
      <div className="box-menu">
        <ThoughtsTrap />
        <ChallengeOfTheDay />
        <DiscomfortTraining />
        <NegativeContemplation />
        <StoicQuotes />
        <Journal />
      </div>
    </div>
  );
}
