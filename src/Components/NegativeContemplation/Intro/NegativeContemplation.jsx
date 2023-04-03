import Visualisation from '../../../Images/MainMenu/ChallengeBoxes/visualisation.png';

import { Link } from 'react-router-dom';

export default function NegativeContemplation() {
  return (
    <div className="box-bottom-square" style={{ backgroundImage: `url(${Visualisation})` }}>
      <div className="box-description">
        <h2>Kontemplacja nieszczęścia</h2>
        <p> 5-15 Minut </p>
      </div>
      <div className="button-div">
        <Link to="/negativecontemplationintro" className="start-link different-color">
          Start
        </Link>
      </div>
    </div>
  );
}
