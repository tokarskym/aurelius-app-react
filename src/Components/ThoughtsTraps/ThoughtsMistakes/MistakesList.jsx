import Mistake from './Mistake';

import { mistakes } from '../../../Data/ThoughtsMistakesData';

export default function MistakesList({ selectedMistakes, onMistakeClick }) {
  return (
    <>
      {mistakes.map((mistake) => (
        <Mistake key={mistake.id} mistake={mistake} selectedMistakes={selectedMistakes} onMistakeClick={onMistakeClick} />
      ))}
    </>
  );
}
