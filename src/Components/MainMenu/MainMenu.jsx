import ChallengeOfTheDay from '../ChallengeOfTheDay/ChallengeOfTheDay';
import DiscomfortTraining from '../DiscomfortTraining/Intro/DiscomfortTraining';
import EmotionsList from '../EmotionsDiv/EmotionsList';
import EmotionsModal from '../EmotionsDiv/EmotionsModal';
import Journal from '../Journal/Intro/Journal';
import NavbarLogo from '../../Images/MainMenu/Navbar/navbar-logo.png';
import NegativeContemplation from '../NegativeContemplation/Intro/NegativeContemplation';
import StoicQuotes from '../StoicQuotes/Intro/StoicQuotes';
import ThoughtsTrap from '../ThoughtsTraps/ThoughtsTrap';
import TypedText from '../TypedText/TypedText';

import { useState, useEffect } from 'react';

export default function MainMenu({ userState, setUserState }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState();
  const [textValue, setTextValue] = useState('');

  const text = 'Cześć,\njak się teraz czujesz?';

  //set record of user feeling state
  useEffect(() => {
    localStorage.setItem('userState', JSON.stringify(userState));
  });

  //user emotion choice
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

  return (
    <div className="container">
      <nav>
        <img src={NavbarLogo} alt="logo app" />
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
