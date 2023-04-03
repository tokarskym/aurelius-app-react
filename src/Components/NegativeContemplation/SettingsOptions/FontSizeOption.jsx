export default function FontSizeOption({ handleFontSizeButtonClick, getFontSizeButtonClassName, activeFontSize }) {
  const fontSizeButtons = [15, 20, 25];

  return (
    <div className="font-size-wrapper">
      <h3>Czcionka</h3>
      <div className="font-size-buttons">
        {fontSizeButtons.map((size) => (
          <button key={size} onClick={() => handleFontSizeButtonClick(size)} className={getFontSizeButtonClassName(size, activeFontSize)}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
