import ChallengeForm from '../ChallengeForm';

export default function UserCorrection({ textAreaValue, handleTextAreaChange, step, textAreaName, placeholderText, handleNext, previousStep, isButtonDisabled }) {
  return (
    <ChallengeForm
      title="Myśli alternatywne"
      description="Jakimi myślami w podobnej sytuacji możesz zastąpić obecne? W podobnej sytuacji mógłbym pomyśleć..."
      textArea=""
      textAreaName={textAreaName}
      textAreaValue={textAreaValue}
      buttonText="Zakończ"
      handleTextAreaChange={handleTextAreaChange}
      placeholderText={placeholderText}
      step={step}
      handleNext={handleNext}
      previousStep={previousStep}
      isButtonDisabled={isButtonDisabled}
    />
  );
}
