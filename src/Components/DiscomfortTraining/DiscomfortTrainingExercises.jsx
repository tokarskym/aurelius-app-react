import Navbar from '../../Utils/Navbar';
import ExerciseList from './ExerciseList';

import { useState } from 'react';

export default function DiscomfortTrainingExercises() {
  const [points, setPoints] = useState(0);

  const countPoints = (exercisePoints) => {
    setPoints(points + exercisePoints);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="challenge-description">
        <h1>Trening dyskomfortu</h1>
      </div>
      <div className="points-section">
        <div className="avatar-section"></div>
        <h2 className="points-number">Masz {points} punktów dyskomfortu.</h2>
      </div>
      <hr />
      <div className="discomfort-exercises-div">
        <ExerciseList countPoints={countPoints} />
      </div>
      <hr />
    </div>
  );
}
