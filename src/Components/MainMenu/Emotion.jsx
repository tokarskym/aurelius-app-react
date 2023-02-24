export default function Emotion({ emotion }) {
  return (
    <div className="emotion-box">
      <div className="emotion-image-container" style={{ backgroundColor: emotion.color }}>
        <img src={emotion.photo} alt="Image of emotion" />
      </div>
      <p>{emotion.description}</p>
    </div>
  );
}
