import React, { useState } from 'react';
import ChevronButton from './ChevronButton';

export default function ExerciseItem({ exercise }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsRotated(!isRotated);
  };

  return (
    <div className="discomfort-exercise-div">
      <div>
        <div className="left-side-of-exercise">
          <h2>{exercise.name}</h2>
          <p>{exercise.points} pkt</p>
          <p>{exercise.status}</p>
        </div>
        <div className="right-side-of-exercise">
          <ChevronButton onClick={toggleExpand} isRotated={isRotated} />
        </div>
      </div>
      {isExpanded && (
        <div className="description-and-button-section">
          <p>{exercise.description}</p>
          <button>Start</button>
        </div>
      )}
    </div>
  );
}
