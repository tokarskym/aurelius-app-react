import ExerciseItem from './ExerciseItem';

import { exercises } from '../../Data/DiscomfortTrainingExercisesData';
import { useState } from 'react';

export default function ExerciseList({ countPoints }) {
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleComplete = (exercisePoints) => {
    setCurrentExercise(currentExercise + 1);
    countPoints(exercisePoints);
  };

  return (
    <>
      {exercises.map((exercise, index) => (
        <ExerciseItem key={index} exercise={exercise} isLocked={index > currentExercise} onComplete={handleComplete} />
      ))}
    </>
  );
}
