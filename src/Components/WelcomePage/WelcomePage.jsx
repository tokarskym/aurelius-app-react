import Logo from '../../Images/WelcomePage/aurelius.png';
import Loader from '../../Utils/Loader';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function WelcomePage() {
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  function handleLinkClick(event) {
    event.preventDefault();
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      navigate('/menu');
    }, 1500);
  }

  return (
    <>
      <div className="welcomepage-background">
        <img src={Logo} alt="aurelius logo" />
      </div>
      <div className="container">
        <div className="homepage-text">
          <h1>Teoria, za którą idzie praktyka</h1>
          <p>Odkryj sens myśli stoickiej, będącej źródłem pomocnych wskazówek w życiu codziennym.</p>
          <Link to="#" onClick={handleLinkClick} className="button-style">
            Start
          </Link>
          <hr />
        </div>
        <Loader show={showLoader} />
      </div>
    </>
  );
}
