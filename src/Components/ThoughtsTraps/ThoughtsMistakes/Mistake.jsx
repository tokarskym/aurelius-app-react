export default function Mistake({ mistake, selectedMistakes, onMistakeClick }) {
  const isSelected = selectedMistakes.includes(mistake.description);

  function handleClick() {
    onMistakeClick(mistake.description);
  }

  return (
    <div className={`mistake-box ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      <img src={mistake.photo} alt="emotion" />
      <p>{mistake.description}</p>
    </div>
  );
}
