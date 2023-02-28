import NavbarLogo from '../../Images/MainMenu/Navbar/navbar-logo.png';
import BackButton from '../../Images/Challenges/back.png';
import { Link } from 'react-router-dom';
import { handleBackButtonClick } from '../../Utils/BackButton';
import ProgressBar from './ProgressBar';
import { useState, useEffect } from 'react';

export default function ChallengePage({ title, description, descriptionTwo, userExplanation, userEmotion, boxes, url, buttonText }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [explanation, setUserExplanation] = useState(localStorage.getItem('explanation') || userExplanation || '');
  const [emotions, setUserEmotions] = useState(localStorage.getItem('emotions') || userEmotion || '');

  useEffect(() => {
    localStorage.setItem('explanation', explanation);
    localStorage.setItem('emotions', emotions);
  }, [explanation, emotions]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleAnswerChange = (event) => {
    setUserExplanation(event.target.value);
  };

  const handleEmotionChange = (event) => {
    setUserEmotions(event.target.value);
  };

  return (
    <div className="container challenge-description-bg">
      <nav>
        <img src={NavbarLogo} alt="Navbar logo app" />
        <button className="back-button" onClick={handleBackButtonClick}>
          <img src={BackButton} alt="" />
        </button>
      </nav>
      <div className="challenge-description thoughts-flex">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {boxes && <div className="thinking-mistakes-boxes">{boxes}</div>}
        {descriptionTwo && <h2>{descriptionTwo}</h2>}
        {userExplanation !== undefined && <textarea className="thoughts-text-area" value={explanation} onChange={handleAnswerChange} />}
        {userEmotion !== undefined && <textarea className="thoughts-text-area" value={emotions} onChange={handleEmotionChange} />}
        <ProgressBar currentPage={currentPage} />
        <Link to={url} className="button-style" onClick={goToNextPage}>
          {buttonText}
        </Link>
        <hr />
      </div>
    </div>
  );
}
