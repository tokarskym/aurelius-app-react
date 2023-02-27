import RectangleBoxBackground from '../../Images/MainMenu/ChallengeBoxes/rectanglebox.png';

export default function Journal() {
  return (
    <div className="box-rectangle" style={{ backgroundImage: `url(${RectangleBoxBackground})` }}>
      <div className="box-rectangle-description">
        <h2>Dziennik</h2>
        <p>24 godziny </p>
      </div>
      <button> Start </button>
    </div>
  );
}
