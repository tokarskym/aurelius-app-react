import Challenge from '../../Images/MainMenu/ChallengeBoxes/challenge.png';

export default function ChallengeOfTheDay() {
  return (
    <div className="box-top-square" style={{ backgroundColor: '#61C4B7' }}>
      <div className="image-in-the-box">
        <img src={Challenge} alt="image" className="image-challenge" />
      </div>
      <div className="box-description">
        <h2>Wyzwanie dnia</h2>
        <p> 10 minut </p>
      </div>
      <div className="button-div">
        <button>Start</button>
      </div>
    </div>
  );
}
