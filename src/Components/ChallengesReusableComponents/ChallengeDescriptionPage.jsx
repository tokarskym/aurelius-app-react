import NavbarLogo from '../../Images/MainMenu/Navbar/navbar-logo.png';
import BackButton from '../../Images/Challenges/back.png';
import { Link } from 'react-router-dom';
import { handleBackButtonClick } from '../../Utils/BackButton';

export default function ChallengeDescriptionPage({ title, quote, philosopher, description, url }) {
  return (
    <div className="container challenge-description-bg">
      <nav>
        <img src={NavbarLogo} alt="Navbar logo app" />
        <button className="back-button" onClick={handleBackButtonClick}>
          <img src={BackButton} alt="" />
        </button>
      </nav>
      <div className="challenge-description">
        <h1>{title}</h1>
        <p>{quote}</p>
        <h4>{philosopher}</h4>
        <hr />
      </div>
      <div className="exercise-description">
        <p>{description}</p>
        <Link to={url} className="button-style">
          Start
        </Link>
        <hr />
      </div>
    </div>
  );
}
