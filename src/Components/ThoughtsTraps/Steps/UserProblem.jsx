import ChallengeForm from '../ChallengeForm';

import { handleBackButtonClick } from '../../../Utils/BackButton';

export default function UserProblem({ textAreaValue, handleTextAreaChange, step, textAreaName, placeholderText, handleNext, isButtonDisabled }) {
  return (
    <ChallengeForm
      title="Opisz swoje myśli lub sytuacje z którą aktualnie się zmagasz."
      textArea=""
      textAreaName={textAreaName}
      textAreaValue={textAreaValue}
      buttonText="Dalej"
      handleTextAreaChange={handleTextAreaChange}
      placeholderText={placeholderText}
      step={step}
      handleNext={handleNext}
      previousStep={handleBackButtonClick}
      isButtonDisabled={isButtonDisabled}
    />
  );
}
