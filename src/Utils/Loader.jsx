export default function Loader({ showLoader }) {
  return (
    <div className="loader" style={{ display: showLoader ? 'flex' : 'none' }}>
      <div className="loading-text">Ładowanie...</div>
      <div className="loading-spinner"></div>
    </div>
  );
}
