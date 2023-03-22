import Quotes from '../../Images/MainMenu/ChallengeBoxes/qoutes.png';
import { Link } from 'react-router-dom';

export default function StoicQuotes() {
  return (
    <div className="box-bottom-square" style={{ backgroundImage: `url(${Quotes})` }}>
      <div className="box-description">
        <h2>Stoickie cytaty</h2>
        <p> 5 Minut </p>
      </div>
      <Link to="/quotegenerator" className="start-link different-color">
        Start
      </Link>
    </div>
  );
}
