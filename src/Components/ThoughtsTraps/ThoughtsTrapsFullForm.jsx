import SummaryModal from './SummaryModal';
import UserEmotions from './Steps/UserEmotions';
import UserDistortions from './Steps/UserDistortions';
import UserProblem from './Steps/UserProblem';
import UserRephrase from './Steps/UserRephrase';
import UserCorrection from './Steps/UserCorrection';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThoughtsTrapFullForm() {
  const [answers, setAnswers] = useState(() => {
    const storedAnswers = JSON.parse(localStorage.getItem('answers'));
    return (
      storedAnswers || {
        userProblem: '',
        userEmotions: '',
        userDistortions: [],
        userRephrase: '',
        userCorrection: '',
      }
    );
  });

  const [step, setStep] = useState(() => {
    const storedStep = JSON.parse(localStorage.getItem('step'));
    return storedStep || 1;
  });

  const [placeholderText, setPlaceholderText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // save in localStorage
  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('step', JSON.stringify(step));
  }, [answers, step]);

  let selectedMistakes = [...answers.userDistortions];

  // choose thinking distortions
  function onMistakeClick(description) {
    let userDistortionsDivs = [...answers.userDistortions];
    if (userDistortionsDivs.includes(description)) {
      userDistortionsDivs = userDistortionsDivs.filter((desc) => desc !== description);
    } else {
      userDistortionsDivs.push(description);
    }
    setAnswers({
      ...answers,
      userDistortions: userDistortionsDivs,
    });
  }

  const clearPlaceholderText = () => {
    setPlaceholderText('Pole nie może zostać puste.');
    setIsButtonDisabled(true);
    setTimeout(() => {
      setPlaceholderText('');
      setIsButtonDisabled(false);
    }, 3000);
  };

  const alertText = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      alert('Wybierz przynajmniej jedno!');
      setIsButtonDisabled(false);
    }, 3000);
  };

  const handleAnswerChange = (event) => {
    setAnswers({
      ...answers,
      [event.target.name]: event.target.value,
    });
  };

  const handleNext = () => {
    if (step === 1 && !answers.userProblem.trim()) {
      clearPlaceholderText();
      return;
    }
    if (step === 2 && !answers.userEmotions.trim()) {
      clearPlaceholderText();
      return;
    }
    if (step === 3 && answers.userDistortions.length === 0) {
      alertText();
      return;
    }
    if (step === 4 && !answers.userRephrase.trim()) {
      clearPlaceholderText();
      return;
    }
    setStep(step + 1);
    if (step === 5 && !answers.userCorrection.trim()) {
      clearPlaceholderText();
      return;
    }
    if (step === 5 && answers.userCorrection.trim()) {
      setShowModal(true);
    }
  };

  // go back to previous step
  const previousStep = () => {
    setStep(step - 1);
  };

  const navigate = useNavigate();
  // finish exercise and remove items from localStorage
  const handleFinishExercise = () => {
    localStorage.removeItem('answers');
    localStorage.removeItem('step');
    setShowModal(false);
    navigate('/menu');
  };

  return (
    <>
      {step === 1 && (
        <UserProblem
          textAreaName="userProblem"
          handleNext={handleNext}
          textAreaValue={answers.userProblem}
          handleTextAreaChange={handleAnswerChange}
          step={step}
          placeholderText={placeholderText}
          isButtonDisabled={isButtonDisabled}
        />
      )}
      {step === 2 && (
        <UserEmotions
          textAreaName="userEmotions"
          handleNext={handleNext}
          textAreaValue={answers.userEmotions}
          handleTextAreaChange={handleAnswerChange}
          step={step}
          placeholderText={placeholderText}
          previousStep={previousStep}
          isButtonDisabled={isButtonDisabled}
        />
      )}
      {step === 3 && (
        <UserDistortions
          handleNext={handleNext}
          step={step}
          previousStep={previousStep}
          onMistakeClick={onMistakeClick}
          selectedMistakes={selectedMistakes}
          isButtonDisabled={isButtonDisabled}
        />
      )}
      {step === 4 && (
        <UserRephrase
          textAreaName="userRephrase"
          handleNext={handleNext}
          textAreaValue={answers.userRephrase}
          handleTextAreaChange={handleAnswerChange}
          step={step}
          placeholderText={placeholderText}
          previousStep={previousStep}
          isButtonDisabled={isButtonDisabled}
        />
      )}
      {step === 5 && (
        <UserCorrection
          textAreaName="userCorrection"
          handleNext={handleNext}
          textAreaValue={answers.userCorrection}
          handleTextAreaChange={handleAnswerChange}
          step={step}
          placeholderText={placeholderText}
          previousStep={previousStep}
          isButtonDisabled={isButtonDisabled}
        />
      )}
      {showModal && (
        <div className="modal">
          <SummaryModal handleFinishExercise={handleFinishExercise} answers={answers} />
        </div>
      )}
    </>
  );
}
