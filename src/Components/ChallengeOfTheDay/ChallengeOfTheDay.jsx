import React, { useState } from 'react';
import Challenge from '../../Images/MainMenu/ChallengeBoxes/challenge.png';
import { Link } from 'react-router-dom';

export default function ChallengeOfTheDay() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setTimeout(() => {
      setIsStarted(false);
    }, 4000);
  };

  return (
    <div className="box-top-square" style={{ backgroundColor: isStarted ? '#4E5567' : '#61C4B7' }}>
      <div className="image-in-the-box">
        <img src={Challenge} alt="challenge of the day" className="image-challenge" />
      </div>
      <div className="box-description">
        <h2> {!isStarted ? 'Wyzwanie dnia' : 'Aktualnie niedostępne'}</h2>
        <p> {!isStarted ? '10 minut' : ''} </p>
      </div>
      <div className="button-div">
        <Link onClick={handleStart} className="start-link">
          Start
        </Link>
      </div>
    </div>
  );
}
