export default function Emotion({ emotion, onClick }) {
  return (
    <div className="emotion-box">
      <div className="emotion-image-container" style={{ backgroundColor: emotion.color }} onClick={onClick}>
        <img src={emotion.photo} alt="emotion" />
      </div>
      <p>{emotion.description}</p>
    </div>
  );
}