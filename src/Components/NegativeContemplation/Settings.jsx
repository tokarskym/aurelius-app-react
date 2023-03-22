import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import './slider.css';
import { useContext } from 'react';
import BackButton from './BackButton';

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: 'left' }}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
