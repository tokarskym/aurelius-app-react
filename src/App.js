import React from 'react';
import './App.css';

import WelcomePage from './Components/WelcomePage/WelcomePage';
import MainMenu from './Components/MainMenu/MainMenu';
import ThoughtsTrap01 from './Components/ThoughtsTraps/Intro/ThoughtsTrap01';
import QuoteGenerator from './Components/StoicQuotes/QuoteGenerator';
import JournalChart from './Components/Journal/JournalChart';
import NegativeContemplationIntro from './Components/NegativeContemplation/Intro/NegativeContemplationIntro';
import TimerAndSettings from './Components/NegativeContemplation/TimerAndSettings';
import DiscomfortTrainingIntro from './Components/DiscomfortTraining/Intro/DiscomfortTrainingIntro';
import MeditationSelector from './Components/NegativeContemplation/MeditationSelector';
import DiscomfortTrainingExercises from './Components/DiscomfortTraining/DiscomfortTrainingExercises';

import ThoughtsTrapFullForm from './Components/ThoughtsTraps/ThoughtsTrapsFullForm';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThoughtsTrap from './Components/ThoughtsTraps/Intro/ThoughtsTrap';

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
          <Route path="/journalchart" element={<JournalChart userState={userState} setUserState={setUserState} />} />
          <Route path="/quotegenerator" element={<QuoteGenerator />} />
          <Route path="/negativecontemplationintro" element={<NegativeContemplationIntro />} />
          <Route path="/meditationselector" element={<MeditationSelector />} />
          <Route path="/timerandsettings" element={<TimerAndSettings />} />
          <Route path="/thoughtstrapfullform" element={<ThoughtsTrapFullForm />} />
          <Route path="/discomforttrainingintro" element={<DiscomfortTrainingIntro />} />
          <Route path="/discomforttrainingexercises" element={<DiscomfortTrainingExercises />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
