import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import MainMenu from './Components/MainMenu/MainMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/menu" element={<MainMenu />} />
      </Routes>
    </Router>
  );
}

export default App;

