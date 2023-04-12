import ChallengeForm from '../ChallengeForm';

export default function UserEmotions({ textAreaValue, handleTextAreaChange, step, textAreaName, placeholderText, handleNext, previousStep, isButtonDisabled }) {
  return (
    <ChallengeForm
      title="Jakie emocje Ci towarzyszą, co czujesz w swoim ciele?"
      textArea=""
      textAreaName={textAreaName}
      textAreaValue={textAreaValue}
      buttonText="Dalej"
      handleTextAreaChange={handleTextAreaChange}
      placeholderText={placeholderText}
      step={step}
      handleNext={handleNext}
      previousStep={previousStep}
      isButtonDisabled={isButtonDisabled}
    />
  );
}
