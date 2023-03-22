export default function EmotionJournalItem({ item, index, handleDelete }) {
  return (
    <li className="emotions-list">
      <div className="single-journal">
        <div className="emotion-image-container" style={{ backgroundColor: item.userEmotion.color }}>
          <img src={item.userEmotion.photo} alt={item.userEmotion.description} />
        </div>
        <p>{item.userExplanation}</p>
        <button className="delete-button" onClick={() => handleDelete(index)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
