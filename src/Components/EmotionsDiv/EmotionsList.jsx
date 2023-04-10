import Emotion from './Emotion';

import { emotions } from '../../Data/EmotionsData';

export default function EmotionsList({ onEmotionClick }) {
  return (
    <>
      {emotions.map((emotion) => (
        <Emotion key={emotion.id} emotion={emotion} onClick={() => onEmotionClick(emotion)} />
      ))}
    </>
  );
}
