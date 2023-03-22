import EmotionChart from './EmotionChart';
import EmotionJournalList from './EmotionJournalList';
import Navbar from '../../Utils/Navbar';

import { useEffect, useState } from 'react';

export default function JournalChart({ userState, setUserState }) {
  const [chartData, setChartData] = useState([]);

  // Delete an emotion from the array and piechart
  const handleDelete = (index) => {
    const newState = userState.filter((item, i) => i !== index);
    setUserState(newState);
  };

  // Count emotion entrance
  useEffect(() => {
    const emotionsCount = userState.reduce((acc, curr) => {
      const currEmotion = curr.userEmotion.description;
      if (acc[currEmotion]) {
        acc[currEmotion]++;
      } else {
        acc[currEmotion] = 1;
      }
      return acc;
    }, {});

    // Create a data array for a pie chart
    const chartData = Object.keys(emotionsCount).map((emotion) => {
      const emotionObject = userState.find((item) => item.userEmotion.description === emotion);
      return {
        emotion: emotion,
        count: emotionsCount[emotion],
        color: emotionObject.userEmotion.color,
      };
    });
    setChartData(chartData);
  }, [userState]);

  //Count most frequent emotions
  const mostFrequentEmotions = chartData
    .reduce(
      (prev, current) => {
        if (prev.count > current.count) {
          return prev;
        } else if (prev.count === current.count) {
          return {
            emotion: [...prev.emotion, current.emotion],
            count: current.count,
          };
        } else {
          return {
            emotion: [current.emotion],
            count: current.count,
          };
        }
      },
      { emotion: [], count: 0 }
    )
    .emotion.join(' / ');

  return (
    <div className="container">
      <Navbar />
      <div className="challenge-description">
        <h1>Dziennik emocjonalny</h1>
      </div>
      {chartData.length > 0 ? (
        <EmotionChart chartData={chartData} mostFrequentEmotions={mostFrequentEmotions} />
      ) : (
        <p className="emotion-journal-heading">Brak emocji do wyświetlenia.</p>
      )}
      <EmotionJournalList userState={userState} handleDelete={handleDelete} />
      <hr />
    </div>
  );
}
