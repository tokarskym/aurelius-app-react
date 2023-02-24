import Logo from '../../Images/WelcomePage/aurelius.png';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <>
      <div className="welcomepage-background">
        <img src={Logo} alt="aurelius logo" />
      </div>
      <div className="container">
        <div className="homepage-text">
          <h1>Teoria, za którą idzie praktyka</h1>
          <p>Odkryj sens myśli stoickiej, będącej źródłem pomocnych wskazówek w życiu codziennym.</p>
          <Link to="/menu" className="button-style">
            Start
          </Link>
          <hr />
        </div>
        <div id="loader" style={{ display: 'none' }}>
          <div className="loading-text">Ładowanie...</div>
          <div className="loading-spinner"></div>
        </div>
      </div>
    </>
  );
}
