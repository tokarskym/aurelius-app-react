export default function Loader({ show }) {
  return (
    <div id="loader" style={{ display: show ? 'flex' : 'none' }}>
      <div className="loading-text">Ładowanie...</div>
      <div className="loading-spinner"></div>
    </div>
  );
}
