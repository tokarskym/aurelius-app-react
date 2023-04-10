import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from './Timer';

import { useState, useEffect } from 'react';

export default function TimerAndSettings({ timerRef }) {
  const [showSettings, setShowSettings] = useState(false);
  const [meditationMinutes, setMeditationMinutes] = useState(5);
  const [pathColor, setPathColor] = useState('#F6A560');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [fontSize, setFontSize] = useState(20);

  useEffect(() => {
    timerRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [timerRef]);

  return (
    <div className="timer-meditation-div" ref={timerRef}>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          meditationMinutes,
          setMeditationMinutes,
          pathColor,
          setPathColor,
          textColor,
          setTextColor,
          fontSize,
          setFontSize,
        }}
      >
        {showSettings && (
          <div className="modal">
            <div className="modal-body-meditation">
              <Settings />
            </div>
          </div>
        )}
        <Timer />
      </SettingsContext.Provider>
    </div>
  );
}
