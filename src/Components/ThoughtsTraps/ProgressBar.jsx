export default function ProgressBar({ step }) {
  const circles = [];

  for (let i = 1; i <= 5; i++) {
    const isActive = i <= step;
    const className = isActive ? 'circle active' : 'circle';

    circles.push(<div key={i} className={className}></div>);
  }

  return <div className="progress-bar-thoughts">{circles}</div>;
}
