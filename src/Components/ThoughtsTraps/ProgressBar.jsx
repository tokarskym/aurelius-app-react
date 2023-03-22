function ProgressBar({ currentPage, totalPages }) {
  const circles = [];

  for (let i = 1; i <= totalPages; i++) {
    const isActive = i <= currentPage;
    const className = isActive ? 'circle active' : 'circle';

    circles.push(<div key={i} className={className}></div>);
  }

  return <div className="progress-bar-thoughts">{circles}</div>;
}

export default ProgressBar;
