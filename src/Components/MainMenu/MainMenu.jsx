import NavbarLogo from '../../Images/MainMenu/Navbar/navbar-logo.png';
import EmotionsList from '../EmotionsDiv/EmotionsList';
import TypedText from '../TypedText/TypedText';
import { useState, useEffect } from 'react';
import EmotionsModal from '../EmotionsDiv/EmotionsModal';
import ThoughtsTrap from '../ThoughtsTraps/ThoughtsTrap';
import ChallengeOfTheDay from '../ChallengeOfTheDay/ChallengeOfTheDay';
import DiscomfortTraining from '../DiscomfortTraining/DiscomfortTraining';
import NegativeContemplation from '../NegativeContemplation/Intro/NegativeContemplation';
import StoicQuotes from '../StoicQuotes/StoicQuotes';
import Journal from '../Journal/Journal';

export default function MainMenu({ userState, setUserState }) {
  const text = 'Cześć,\njak się teraz czujesz?';
  const [showModal, setShowModal] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState();
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    localStorage.setItem('userState', JSON.stringify(userState));
  });

  const onEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setShowModal(true);
  };

  const handleTextAreaChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSaveClick = () => {
    setUserState((prevState) => [...prevState, { userEmotion: selectedEmotion, userExplanation: textValue }]);
    localStorage.setItem('userState', JSON.stringify([...userState]));
    setShowModal(false);
    setTextValue('');
  };

  console.log(userState);

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
        <Journal userState={userState} />
      </div>
    </div>
  );
}
