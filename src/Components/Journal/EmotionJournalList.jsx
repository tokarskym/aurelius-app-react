import EmotionJournalItem from './EmotionJournalItem';

export default function EmotionJournalList({ userState, handleDelete }) {
  return (
    <ul className="emotions-journal">
      {userState.map((item, index) => (
        <EmotionJournalItem key={index} item={item} index={index} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}
