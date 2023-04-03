import Navbar from '../../Utils/Navbar';
import TimerAndSettings from './TimerAndSettings';

import { useState, useEffect, useRef } from 'react';
import { meditations } from '../../Data/NegativeContemplationData';

export default function MeditationSelector() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedMeditation, setSelectedMeditation] = useState(meditations[0]);

  const timerRef = useRef(null);

  // Show first meditation with description from array
  useEffect(() => {
    setDescription(selectedMeditation.description);
  }, [selectedMeditation]);

  // Get a random meditation from array
  const handleStartAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      const randomMeditation = meditations[Math.floor(Math.random() * meditations.length)];
      setSelectedMeditation(randomMeditation);
    }, 1000);
  };
  // Button functions
  const handleStartButtonClick = () => {
    setIsStarted(true);
  };

  const handleCancelButtonClick = () => {
    setIsStarted(false);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="challenge-description">
        <h1> {isStarted ? `${selectedMeditation.name}` : 'Losowanie medytacji'}</h1>
      </div>
      <div className="meditation-selector">
        <div className={`meditation-image ${isAnimating ? 'animating' : ''}`} style={{ backgroundColor: selectedMeditation.color }}>
          <img src={selectedMeditation.photo} alt={`Medytacja ${selectedMeditation.id}`} />
          <h3 className="meditation-name">{selectedMeditation.name}</h3>
          <button className="start-link" onClick={isStarted ? handleCancelButtonClick : handleStartButtonClick}>
            {isStarted ? 'Anuluj' : 'Start'}
          </button>
        </div>
        {isAnimating && <div>Losowanie medytacji...</div>}
        {!(isAnimating || isStarted) && (
          <>
            <button className="button-style button-random" onClick={handleStartAnimation}>
              Losuj
            </button>
            <p className="meditation-description">{description}</p>
          </>
        )}
      </div>
      <hr />
      {isStarted && <TimerAndSettings timerRef={timerRef} />}
    </div>
  );
}
