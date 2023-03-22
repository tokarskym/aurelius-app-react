import AddToFavoritesButton from './AddToFavoritesButton';

export default function QuoteDisplay({ quote, author, isEllipsis, translatedQuote, plusButton, addToFavorites }) {
  return (
    <div className="quote-generator">
      <p className="english-quote">{quote}</p>
      <p className="translated-quote">{isEllipsis && `"[...] ${translatedQuote}"`}</p>
      <p className="quote-author">{author}</p>
      {plusButton && <AddToFavoritesButton onClick={addToFavorites} />}
    </div>
  );
}
