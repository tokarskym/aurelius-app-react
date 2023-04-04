import ChevronButton from './ChevronButton';

import { useState } from 'react';

export default function ExerciseItem({ exercise, isLocked, onComplete }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [buttonText, setButtonText] = useState('Start');

  const [startTime, setStartTime] = useState(null);

  // show or hide training description and turn chevron 180 degrees
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsRotated(!isRotated);
  };

  // start training
  const toggleStart = () => {
    setIsStarted(!isStarted);
    setButtonText('Zakończ');
    exercise.status = 'W trakcie';
    setStartTime(Date.now());
  };

  // finish training
  const toggleComplete = (elapsedTime) => {
    if (!isLocked) {
      setIsStarted(false);
      setIsCompleted(true);
      exercise.status = `Ukończone w ${formatTime(elapsedTime)}`;
      onComplete(exercise.points);
      toggleExpand();
    }
  };

  const handleButtonClick = () => {
    if (isStarted) {
      const elapsedTimeInSeconds = (Date.now() - startTime) / 1000; // how much time took to complete training
      toggleComplete(elapsedTimeInSeconds);
    } else {
      toggleStart();
    }
  };

  // formating time of the training
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
    const seconds = Math.floor(timeInSeconds - hours * 3600 - minutes * 60);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  // get proper class name
  const getDivClassName = () => {
    return `discomfort-exercise-div ${isLocked ? 'locked' : isStarted ? 'started' : isCompleted ? 'completed' : ''}`;
  };

  return (
    <div className={getDivClassName()}>
      {isLocked ? (
        <div className="exercise-unavailable">
          <h3>Aktualnie niedostępne.</h3>
        </div>
      ) : (
        <div className="exercise-intro">
          <div className="left-side-of-exercise">
            <h2>{exercise.name}</h2>
            <p>
              {exercise.points} pkt | {exercise.status}.
            </p>
          </div>
          <div className="right-side-of-exercise">
            <ChevronButton onClick={toggleExpand} isRotated={isRotated} />
          </div>
        </div>
      )}
      {isExpanded && (
        <div>
          <p>{exercise.description}</p>
          {!isCompleted && (
            <button className="button-style" onClick={handleButtonClick}>
              {buttonText}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
