import Challenge from '../../Images/MainMenu/ChallengeBoxes/challenge.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

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
        <img src={Challenge} alt="challenge of the day" />
      </div>
      <div className="box-description">
        <h2 style={{ textAlign: isStarted ? 'center' : 'left' }}> {!isStarted ? 'Wyzwanie dnia' : 'Niedostępne'}</h2>
        <p> {!isStarted ? '10 minut' : ''} </p>
      </div>
      <div className="button-div">
        <Link onClick={handleStart} className="start-link" style={{ display: isStarted ? 'none' : 'flex' }}>
          Start
        </Link>
      </div>
    </div>
  );
}
