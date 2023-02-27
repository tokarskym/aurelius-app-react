import Quotes from '../../Images/MainMenu/ChallengeBoxes/qoutes.png';
export default function StoicQuotes() {
  return (
    <div className="box-bottom-square" style={{ backgroundImage: `url(${Quotes})` }}>
      <div className="box-description">
        <h2>Stoickie cytaty</h2>
        <p> 5 Minut </p>
      </div>
      <div className="button-div">
        <button>Start</button>
      </div>
    </div>
  );
}
