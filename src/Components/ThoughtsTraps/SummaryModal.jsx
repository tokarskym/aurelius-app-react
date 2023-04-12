export default function SummaryModal({ answers, handleFinishExercise }) {
  return (
    <div className="modal-content modal-content-thoughts">
      <h1 className="thoughts-challenge-title">Podsumowanie</h1>
      <div className="thoughts-summarise-modal">
        <h4>Problem</h4>
        <p className="modal-thoughts-p">{answers.userProblem}</p>
        <h4>Emocje</h4>
        <p className="modal-thoughts-p">{answers.userEmotions}</p>
        <h4>Zniekształcenia</h4>
        {answers.userDistortions.map((distortion, index) => (
          <p key={index} className="modal-thoughts-p">
            {distortion}
          </p>
        ))}
        <h4>Przeformułowanie </h4>
        <p className="modal-thoughts-p">{answers.userRephrase}</p>
        <h4>Alternatywa</h4>
        <p className="modal-thoughts-p">{answers.userCorrection}</p>
      </div>
      <button className="button-style button-hover" onClick={handleFinishExercise}>
        Zamknij
      </button>
    </div>
  );
}
