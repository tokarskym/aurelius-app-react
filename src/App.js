import React from 'react';
import './App.css';

import DiscomfortTrainingIntro from './Components/DiscomfortTraining/Intro/DiscomfortTrainingIntro';
import DiscomfortTrainingExercises from './Components/DiscomfortTraining/DiscomfortTrainingExercises';
import JournalChart from './Components/Journal/JournalChart';
import MainMenu from './Components/MainMenu/MainMenu';
import MeditationSelector from './Components/NegativeContemplation/MeditationSelector';
import NegativeContemplationIntro from './Components/NegativeContemplation/Intro/NegativeContemplationIntro';
import TimerAndSettings from './Components/NegativeContemplation/TimerAndSettings';
import ThoughtsTrapIntro from './Components/ThoughtsTraps/Intro/ThoughtsTrapIntro';
import ThoughtsTrapFullForm from './Components/ThoughtsTraps/ThoughtsTrapsFullForm';
import QuoteGenerator from './Components/StoicQuotes/QuoteGenerator';
import WelcomePage from './Components/WelcomePage/WelcomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {
  // get user feeling state and explanation from the local storage for creating a journal chart
  const [userState, setUserState] = useState(JSON.parse(localStorage.getItem('userState')) || []);

  useEffect(() => {
    localStorage.setItem('userState', JSON.stringify(userState));
  });

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/discomforttrainingintro" element={<DiscomfortTrainingIntro />} />
          <Route path="/discomforttrainingexercises" element={<DiscomfortTrainingExercises />} />
          <Route path="/journalchart" element={<JournalChart userState={userState} setUserState={setUserState} />} />
          <Route path="/menu" element={<MainMenu userState={userState} setUserState={setUserState} />} />
          <Route path="/meditationselector" element={<MeditationSelector />} />
          <Route path="/negativecontemplationintro" element={<NegativeContemplationIntro />} />
          <Route path="/timerandsettings" element={<TimerAndSettings />} />
          <Route path="/thoughtstrapintro" element={<ThoughtsTrapIntro />} />
          <Route path="/thoughtstrapfullform" element={<ThoughtsTrapFullForm />} />
          <Route path="/quotegenerator" element={<QuoteGenerator />} />
          <Route exact path="/" element={<WelcomePage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
