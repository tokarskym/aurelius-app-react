import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import MainMenu from './Components/MainMenu/MainMenu';
import ThoughtsTrap01 from './Components/ThoughtsTraps/ThoughtsTrap01';
import ThoughtsTrap02 from './Components/ThoughtsTraps/ThoughtsTrap02';
import ThoughtsTrap03 from './Components/ThoughtsTraps/ThoughtsTrap03';
import ThoughtsTrap04 from './Components/ThoughtsTraps/ThoughtsTrap04';
import ThoughtsTrap05 from './Components/ThoughtsTraps/ThoughtsTrap05';
import ThoughtsTrap06 from './Components/ThoughtsTraps/ThoughtsTrap06';
import QuoteGenerator from './Components/StoicQuotes/QuoteGenerator';
import JournalChart from './Components/Journal/JournalChart';
import NegativeContemplation01 from './Components/NegativeContemplation/NegativeContemplation01';
import NegativeContemplation05 from './Components/NegativeContemplation/NegativeContemplation05';
import { useState, useEffect } from 'react';
import DiscomfortTraining01 from './Components/DiscomfortTraining/DiscomfortTraining01';

export default function App() {
  // emotions + description of user state //
  const [userState, setUserState] = useState(JSON.parse(localStorage.getItem('userState')) || []);
  useEffect(() => {
    localStorage.setItem('userState', JSON.stringify(userState));
  });

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/menu" element={<MainMenu userState={userState} setUserState={setUserState} />} />
          <Route path="/thoughtstrap01" element={<ThoughtsTrap01 />} />
          <Route path="/thoughtstrap02" element={<ThoughtsTrap02 />} />
          <Route path="/thoughtstrap03" element={<ThoughtsTrap03 />} />
          <Route path="/thoughtstrap04" element={<ThoughtsTrap04 />} />
          <Route path="/thoughtstrap05" element={<ThoughtsTrap05 />} />
          <Route path="/thoughtstrap06" element={<ThoughtsTrap06 />} />
          <Route path="/journalchart" element={<JournalChart userState={userState} setUserState={setUserState} />} />
          <Route path="/quotegenerator" element={<QuoteGenerator />} />
          <Route path="/negativecontemplation01" element={<NegativeContemplation01 />} />
          <Route path="/negativecontemplation05" element={<NegativeContemplation05 />} />
          <Route path="/discomforttraining01" element={<DiscomfortTraining01 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
