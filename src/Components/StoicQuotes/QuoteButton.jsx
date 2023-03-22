export default function QuoteButton({ getQuote }) {
  return (
    <button className="button-style" onClick={getQuote}>
      Losuj
    </button>
  );
}
