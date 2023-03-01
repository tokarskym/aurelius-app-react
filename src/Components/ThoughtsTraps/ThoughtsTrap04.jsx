import ChallengePage from './ChallengePage';
import MistakesList from './ThoughtsMistakes/MistakesList';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ThoughtsTrap04() {
  const [selectedMistakes, setSelectedMistakes] = useState(JSON.parse(localStorage.getItem('selectedMistakes')) || []);

  useEffect(() => {
    localStorage.setItem('selectedMistakes', JSON.stringify(selectedMistakes));
  }, [selectedMistakes]);

  function handleMistakeClick(mistakeDescription) {
    if (selectedMistakes.includes(mistakeDescription)) {
      setSelectedMistakes(selectedMistakes.filter((desc) => desc !== mistakeDescription));
    } else {
      setSelectedMistakes([...selectedMistakes, mistakeDescription]);
    }
  }

  return (
    <ChallengePage
      title="Zniekształcenia poznawcze"
      description="Z podanych poniżej zniekształceń poznawczych, wybierz te, które Twoim zdaniem wpływają na obecne myśli."
      url="/ThoughtsTrap05"
      currentPage="3"
      totalPages="5"
      buttonText="Dalej"
      boxes={
        <>
          <MistakesList selectedMistakes={selectedMistakes} onMistakeClick={handleMistakeClick} />
        </>
      }
    />
  );
}
