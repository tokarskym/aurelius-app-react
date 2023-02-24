import Emotion from './Emotion';
import { emotions } from '../../Data/EmotionsData';

export default function EmotionsList() {
  return (
    <>
      {emotions.map((emotion) => (
        <Emotion key={emotion.id} emotion={emotion}></Emotion>
      ))}
    </>
  );
}
