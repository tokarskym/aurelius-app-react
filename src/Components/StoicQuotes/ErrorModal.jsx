export default function ErrorModal({ message, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content error-modal">
        <p className="error-modal-message">{message}</p>
        <p className="error-try-again">Spróbuj ponownie.</p>
        <button onClick={closeModal} className="button-style button-hover">
          Zamknij
        </button>
      </div>
    </div>
  );
}
