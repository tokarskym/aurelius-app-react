import Thoughts from '../../Images/MainMenu/ChallengeBoxes/thoughts.png';
import { Link } from 'react-router-dom';

export default function ThoughtsTrap() {
  return (
    <div className="box-top-square" style={{ backgroundColor: '#F6A560' }}>
      <div className="image-in-the-box">
        <img src={Thoughts} alt="image" className="image-thoughts" />
      </div>
      <div className="box-description">
        <h2>Pułapki myślenia</h2>
        <p>10 minut</p>
      </div>
      <div className="button-div">
        <Link to="/thoughtstrap01">
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
}

