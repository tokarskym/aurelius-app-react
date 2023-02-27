import Visualisation from '../../Images/MainMenu/ChallengeBoxes/visualisation.png';

export default function NegativeContemplation() {
  return (
    <div className="box-bottom-square" style={{ backgroundImage: `url(${Visualisation})` }}>
      <div className="box-description">
        <h2>Kontemplacja nieszczęścia</h2>
        <p> 5-15 Minut </p>
      </div>
      <div className="button-div">
        <button>Start</button>
      </div>
    </div>
  );
}
