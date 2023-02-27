import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import MainMenu from './Components/MainMenu/MainMenu';
import ThoughtsTrap01 from './Components/ThoughtsTrap/ThoughtsTrap01';
import NegativeContemplation01 from './Components/NegativeContemplation/NegativeContemplation01';
import DiscomfortTraining01 from './Components/DiscomfortTraining/DiscomfortTraining01';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/thoughtstrap01" element={<ThoughtsTrap01 />} />
        <Route path="/negativecontemplation01" element={<NegativeContemplation01 />} />
        <Route path="/discomforttraining01" element={<DiscomfortTraining01 />} />
      </Routes>
    </Router>
  );
}

export default App;
