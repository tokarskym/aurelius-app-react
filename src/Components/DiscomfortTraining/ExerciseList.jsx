import ExerciseItem from './ExerciseItem';
import { exercises } from '../../Data/DiscomfortTrainingExercisesData';

export default function ExerciseList() {
  return (
    <>
      {exercises.map((exercise, index) => (
        <ExerciseItem key={index} exercise={exercise} />
      ))}
    </>
  );
}
