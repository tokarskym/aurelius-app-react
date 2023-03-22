import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

export default function EmotionChart({ chartData, mostFrequentEmotions }) {
  return (
    <div>
      <p className="emotion-journal-heading">Najczęściej przeżywana emocja to {mostFrequentEmotions}.</p>
      <div className="container-piechart">
        <PieChart width={350} height={350}>
          <Pie data={chartData} dataKey="count" nameKey="emotion" cx="50%" cy="50%" outerRadius={100} label>
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: 'linear-gradient(to bottom, #ffffff, #f2f2f2)',
              border: '1px solid #d6d6d6',
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
              fontFamily: 'Work Sans, sans-serif',
              opacity: 0.6,
              padding: '10px',
              borderRadius: '5px',
            }}
            formatter={(value) => `${value}`}
          />
          <Legend wrapperStyle={{ paddingBottom: 10 }} iconSize={13} iconType="circle" />
        </PieChart>
      </div>
    </div>
  );
}
