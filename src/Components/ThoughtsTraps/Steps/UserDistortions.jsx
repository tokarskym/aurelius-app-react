import ChallengeForm from '../ChallengeForm';
import MistakesList from '../ThoughtsMistakes/MistakesList';

export default function UserDistortions({ step, handleNext, previousStep, onMistakeClick, selectedMistakes, isButtonDisabled }) {
  return (
    <ChallengeForm
      title="Zniekształcenia poznawcze"
      description="Z podanych poniżej zniekształceń poznawczych, wybierz te, które Twoim zdaniem wpływają na obecne myśli."
      buttonText="Dalej"
      step={step}
      handleNext={handleNext}
      previousStep={previousStep}
      isButtonDisabled={isButtonDisabled}
      boxes={
        <>
          <MistakesList selectedMistakes={selectedMistakes} onMistakeClick={onMistakeClick} />
        </>
      }
    />
  );
}
