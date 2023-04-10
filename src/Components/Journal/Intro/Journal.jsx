import RectangleBoxBackground from '../../../Images/MainMenu/ChallengeBoxes/rectanglebox.png';

import { Link } from 'react-router-dom';

export default function Journal() {
  return (
    <div className="box-rectangle" style={{ backgroundImage: `url(${RectangleBoxBackground})` }}>
      <div className="box-rectangle-description">
        <h2>Dziennik emocjonalny</h2>
        <p>24 godziny</p>
      </div>
      <Link to="/journalchart" className="start-link start-link-margin">
        Start
      </Link>
    </div>
  );
}
