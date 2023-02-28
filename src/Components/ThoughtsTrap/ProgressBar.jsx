export default function ProgressBar({ currentPage }) {
  const circles = [];
  for (let i = 1; i <= 5; i++) {
    const isCurrent = i === currentPage;
    const className = isCurrent ? 'circle active' : 'circle';
    circles.push(<div key={i} className={className} />);
  }

  return <div className="progress-bar">{circles}</div>;
}
