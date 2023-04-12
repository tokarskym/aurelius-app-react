import ChallengeForm from '../ChallengeForm';

export default function UserRephrase({ textAreaValue, handleTextAreaChange, step, textAreaName, placeholderText, handleNext, previousStep, isButtonDisabled }) {
  return (
    <ChallengeForm
      title="Zmierz się z swoimi myślami"
      description="Zauważyłeś że Twoja myśl, jest w jakiś sposób zniekształcona. Spróbuj jeszcze raz się z nią zmierzyć, tym razem nazywając zniekształcenia 
                   swoimi słowami. Moja myśl może być nieprawdziwa ponieważ..."
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
