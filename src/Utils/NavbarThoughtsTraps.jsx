import BackButton from '../Images/Challenges/back.png';
import NavbarLogo from '../Images/MainMenu/Navbar/navbar-logo.png';

export default function Navbar({ handleBackButtonClick }) {
  return (
    <nav>
      <img src={NavbarLogo} alt="Navbar logo app" />
      <button className="back-button" onClick={handleBackButtonClick}>
        <img src={BackButton} alt="" />
      </button>
    </nav>
  );
}
