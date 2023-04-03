export default function TextColorOption({ handleTextColorButtonClick, getColorButtonClassName, activeTextColor }) {
  const textColorButtons = [
    { color: '#FFFFFF', name: 'White' },
    { color: '#FFF7F0', name: 'Light' },
    { color: '#EBEAEC', name: 'Gray' },
  ];

  return (
    <div className="color-text-wrapper">
      <h3>Tekst</h3>
      <div className="color-buttons">
        {textColorButtons.map((button) => (
          <button
            key={button.name}
            onClick={() => handleTextColorButtonClick(button.color)}
            className={getColorButtonClassName(button.color, activeTextColor) + ' text-color-button'}
            style={{
              backgroundColor: button.color,
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
