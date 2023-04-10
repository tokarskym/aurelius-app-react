import { Link } from 'react-router-dom';

export default function DiscomfortTraining() {
  return (
    <div className="box-rectangle">
      <div className="box-rectangle-description">
        <h2>Trening dyskomfortu</h2>
        <p> 24 godziny </p>
      </div>
      <Link to="/discomforttraining01" className="start-link start-link-margin">
        Start
      </Link>
    </div>
  );
}
