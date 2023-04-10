import NavbarLogo from '../../Images/MainMenu/Navbar/navbar-logo.png';
import BackButton from '../../Images/Challenges/back.png';
import { Link } from 'react-router-dom';
import { handleBackButtonClick } from '../../Utils/BackButton';
import ProgressBar from './ProgressBar';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function ChallengePage({ title, description, userExplanation, userEmotion, userClarification, userAlternative, boxes, url, buttonText, currentPage, totalPages }) {
  const [explanation, setUserExplanation] = useState(localStorage.getItem('explanation') || userExplanation || '');
  const [emotions, setUserEmotions] = useState(localStorage.getItem('emotions') || userEmotion || '');
  const [clarification, setUserClarification] = useState(localStorage.getItem('clarification') || userClarification || '');
  const [alternative, setUserAlternative] = useState(localStorage.getItem('alternative') || userAlternative || '');

  const linkRef = useRef(null);

  const handleAnswerChange = (event) => {
    setUserExplanation(event.target.value);
  };

  const handleEmotionChange = (event) => {
    setUserEmotions(event.target.value);
  };

  const handleClarificationChange = (event) => {
    setUserClarification(event.target.value);
  };

  const handleAlternativeChange = (event) => {
    setUserAlternative(event.target.value);
  };

  useEffect(() => {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('explanation', explanation);
      localStorage.setItem('emotions', emotions);
      localStorage.setItem('clarification', clarification);
      localStorage.setItem('alternative', alternative);
    }
  }, [explanation, emotions, clarification, alternative]);

  const handleFinishClick = () => {
    if (linkRef.current && linkRef.current.innerText === 'ZAKOŃCZ') {
      setUserExplanation('');
      setUserEmotions('');
      setUserClarification('');
      setUserAlternative('');
    }
  };

  return (
    <div className="container challenge-description-bg">
      <nav>
        <img src={NavbarLogo} alt="Navbar logo app" />
        <button className="back-button" onClick={handleBackButtonClick}>
          <img src={BackButton} alt="" />
        </button>
      </nav>
      <h1 className="thoughts-challenge-title">{title}</h1>
      <div className="challenge-description thoughts-flex">
        {description && <p className="thoughts-challenge-descriptions">{description}</p>}
        {boxes && <div className="thinking-mistakes-boxes">{boxes}</div>}
        {userExplanation !== undefined && <textarea className="thoughts-text-area" value={explanation} onChange={handleAnswerChange} />}
        {userEmotion !== undefined && <textarea className="thoughts-text-area" value={emotions} onChange={handleEmotionChange} />}
        {userClarification !== undefined && <textarea className="thoughts-text-area" value={clarification} onChange={handleClarificationChange} />}
        {userAlternative !== undefined && <textarea className="thoughts-text-area" value={alternative} onChange={handleAlternativeChange} />}
        <ProgressBar currentPage={currentPage} totalPages={totalPages} />
        <Link to={url} ref={linkRef} className="button-style button-hover" onClick={handleFinishClick}>
          {buttonText}
        </Link>
        <hr />
      </div>
    </div>
  );
}
