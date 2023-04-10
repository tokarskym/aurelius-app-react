import BackButton from '../Images/Challenges/back.png';
import NavbarLogo from '../Images/MainMenu/Navbar/navbar-logo.png';

import { handleBackButtonClick } from './BackButton';

export default function Navbar() {
  return (
    <nav>
      <img src={NavbarLogo} alt="Navbar logo app" />
      <button className="back-button" onClick={handleBackButtonClick}>
        <img src={BackButton} alt="" />
      </button>
    </nav>
  );
}
