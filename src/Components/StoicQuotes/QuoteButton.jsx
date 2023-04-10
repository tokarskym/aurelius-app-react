export default function QuoteButton({ getQuote }) {
  return (
    <button className="button-style button-hover" onClick={getQuote}>
      Losuj
    </button>
  );
}
