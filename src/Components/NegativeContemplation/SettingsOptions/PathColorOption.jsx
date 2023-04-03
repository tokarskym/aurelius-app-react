export default function PathColorOption({ handleColorButtonClick, getColorButtonClassName, activePathColor }) {
  const pathColorButtons = [
    { color: '#f6a560', name: 'Default' },
    { color: '#61c4b7', name: 'Teal' },
    { color: '#EBDACC', name: 'White' },
  ];

  return (
    <div className="color-buttons-wrapper">
      <h3>Kolor</h3>
      <div className="color-buttons">
        {pathColorButtons.map((button) => (
          <button
            key={button.name}
            onClick={() => handleColorButtonClick(button.color)}
            className={getColorButtonClassName(button.color, activePathColor)}
            style={{
              backgroundColor: button.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}
