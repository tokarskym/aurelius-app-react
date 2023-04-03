import FontSizeOption from './SettingsOptions/FontSizeOption';
import PathColorOption from './SettingsOptions/PathColorOption';
import ReactSlider from 'react-slider';
import SaveSettingsButton from './Buttons/SaveSettingsButton';
import SettingsContext from './SettingsContext';
import TextColorOption from './SettingsOptions/TextColorOption';

import { useContext, useState } from 'react';

export default function Settings() {
  const settingsInfo = useContext(SettingsContext);
  const [sliderValue, setSliderValue] = useState(settingsInfo.meditationMinutes);
  //active states

  const [activePathColor, setActivePathColor] = useState(null);
  const [activeTextColor, setActiveTextColor] = useState(null);
  const [activeFontSize, setActiveFontSize] = useState(null);
  //button functions

  const handleColorButtonClick = (color) => {
    settingsInfo.setPathColor(color);
    setActivePathColor(color);
  };

  const handleTextColorButtonClick = (color) => {
    settingsInfo.setTextColor(color);
    setActiveTextColor(color);
  };

  const handleFontSizeButtonClick = (size) => {
    settingsInfo.setFontSize(size);
    setActiveFontSize(size);
  };

  const handleSaveButtonClick = () => {
    settingsInfo.setMeditationMinutes(sliderValue);
    settingsInfo.setShowSettings(false);
  };
  // get proper class name:

  const getColorButtonClassName = (buttonColor, activeColor) =>
    activeColor === null ? 'color-button' : buttonColor === activeColor ? 'color-button active' : 'color-button inactive';

  const getFontSizeButtonClassName = (buttonSize) =>
    activeFontSize === null ? 'font-size-button' : buttonSize === activeFontSize ? 'font-size-button active' : 'font-size-button inactive';

  return (
    <div style={{ textAlign: 'left' }}>
      <label>{sliderValue}:00</label>
      <ReactSlider className={'slider'} thumbClassName={'thumb'} trackClassName={'track'} value={sliderValue} onChange={(newValue) => setSliderValue(newValue)} min={1} max={15} />
      <PathColorOption handleColorButtonClick={handleColorButtonClick} getColorButtonClassName={getColorButtonClassName} activePathColor={activePathColor} />
      <TextColorOption handleTextColorButtonClick={handleTextColorButtonClick} getColorButtonClassName={getColorButtonClassName} activeTextColor={activeTextColor} />
      <FontSizeOption handleFontSizeButtonClick={handleFontSizeButtonClick} getFontSizeButtonClassName={getFontSizeButtonClassName} activeFontSize={activeFontSize} />
      <SaveSettingsButton onClick={handleSaveButtonClick} />
    </div>
  );
}
