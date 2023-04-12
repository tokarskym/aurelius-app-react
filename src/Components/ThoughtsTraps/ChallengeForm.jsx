import NavbarThoughtsTraps from '../../Utils/NavbarThoughtsTraps';
import ProgressBar from './ProgressBar';

export default function ChallengeForm({
  title,
  description,
  boxes,
  textAreaValue,
  handleTextAreaChange,
  step,
  buttonText,
  textArea,
  handleNext,
  textAreaName,
  placeholderText,
  previousStep,
  isButtonDisabled,
}) {
  return (
    <div className="container challenge-description-bg">
      <NavbarThoughtsTraps handleBackButtonClick={previousStep} />
      <h1 className="thoughts-challenge-title">{title}</h1>
      <div className="challenge-description thoughts-flex">
        {description && <p className="thoughts-challenge-description">{description}</p>}
        {boxes && <div className="thinking-mistakes-boxes">{boxes}</div>}
        {textArea !== undefined && (
          <textarea className="thoughts-text-area text-area-style" value={textAreaValue} onChange={handleTextAreaChange} name={textAreaName} placeholder={placeholderText} />
        )}
        <ProgressBar step={step} />
        <button className={`button-style button-hover ${isButtonDisabled ? 'disabled' : ''}`} onClick={handleNext} disabled={isButtonDisabled}>
          {buttonText}
        </button>
        <hr />
      </div>
    </div>
  );
}
