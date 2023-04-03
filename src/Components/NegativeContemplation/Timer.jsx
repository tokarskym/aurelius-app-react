import 'react-circular-progressbar/dist/styles.css';

import PauseButton from './Buttons/PauseButton';
import PlayButton from './Buttons/PlayButton';
import SettingsButton from './Buttons/SettingsButton';
import SettingsContext from './SettingsContext';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useContext, useState, useEffect, useRef } from 'react';

export default function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  //get meditation settings
  useEffect(() => {
    secondsLeftRef.current = settingsInfo.meditationMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    // set interval for tick function
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return;
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = settingsInfo.meditationMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  const handleSettingsButton = () => {
    const currentSecondsLeft = secondsLeftRef.current;
    setSecondsLeft(currentSecondsLeft);
    settingsInfo.setShowSettings(true);
    setIsPaused(true);
    isPausedRef.current = true;
  };

  return (
    <div className="progress-bar-div">
      <div className="second-circle">
        <CircularProgressbar
          strokeWidthPath={5}
          value={percentage}
          text={minutes + ':' + seconds}
          styles={buildStyles({
            textColor: settingsInfo.textColor,
            pathColor: settingsInfo.pathColor,
            trailColor: '#444545',
            textSize: `${settingsInfo.fontSize}px`,
          })}
        />
      </div>
      {isPaused ? (
        <PlayButton
          onClick={() => {
            setIsPaused(false);
            isPausedRef.current = false;
          }}
        />
      ) : (
        <PauseButton
          onClick={() => {
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        />
      )}
      <SettingsButton onClick={handleSettingsButton} />
    </div>
  );
}
