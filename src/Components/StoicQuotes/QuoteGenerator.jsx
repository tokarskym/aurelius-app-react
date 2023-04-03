import ErrorModal from './ErrorModal';
import FavoritesList from './FavoritesList';
import Loader from '../../Utils/Loader';
import Navbar from '../../Utils/Navbar';
import QuoteButton from './QuoteButton';
import QuoteDisplay from './QuoteDisplay';

import { fetchQuote } from '../../Services/ApiQuotes';
import { translateQuoteAPI } from '../../Services/ApiTranslateQuote';
import { useState } from 'react';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [plusButton, setPlusButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isEllipsis, setIsEllipsis] = useState(false);
  const [translatedQuote, setTranslatedQuote] = useState('');
  const [error, setError] = useState('');

  // API functions
  const handleQuoteError = () => {
    setError('Nie udało się pobrać cytatu.');
    setAuthor('');
    setQuote('');
  };

  const handleTranslationError = () => {
    setError('Nie udało się przetłumaczyć cytatu.');
  };

  const handleQuoteSuccess = (data) => {
    const { author, quote } = data;
    setQuote(quote);
    setAuthor(author);
    translateQuote(quote);
    setPlusButton(true);
    setIsEllipsis(true);
  };

  const closeModal = () => {
    setError('');
  };

  // Translate quote
  const translateQuote = (quote) => {
    const API_KEY = '3fe4c5e2-03c0-7d51-af4a-94e03810dc57:fx';
    translateQuoteAPI(API_KEY, quote)
      .then((response) => {
        const { translations } = response.data;
        setTranslatedQuote(translations[0]?.text);
      })
      .catch((error) => {
        handleTranslationError(error);
      });
  };

  // Get quote from server
  const getQuote = () => {
    setShowLoader(true);
    fetchQuote()
      .then((response) => {
        const { author, quote } = response.data;
        if (author === '' || quote.includes('@')) {
          handleQuoteError();
        } else {
          handleQuoteSuccess(response.data);
        }
      })
      .catch((error) => {
        handleQuoteError(error);
      })
      .finally(() => {
        setShowLoader(false);
      });
  };

  // Favourites quotes functions
  const addToFavorites = () => {
    setFavorites([...favorites, { author, translatedQuote }]);
    setPlusButton(false);
  };

  const removeFromFavorites = (index) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="challenge-description">
        <h1>Stoickie cytaty</h1>
      </div>
      <div className="generate-quote-div">
        <QuoteButton getQuote={getQuote} />
      </div>
      {quote === '' && <h3 className="english-quote">Kliknij przycisk aby wygenerować losowy cytat stoicki</h3>}
      <Loader show={showLoader} />
      {quote !== '' && (
        <QuoteDisplay quote={quote} author={author} isEllipsis={isEllipsis} translatedQuote={translatedQuote} plusButton={plusButton} addToFavorites={addToFavorites} />
      )}
      <hr />
      <FavoritesList favorites={favorites} removeFromFavorites={removeFromFavorites} />
      {error !== '' && <ErrorModal message={error} closeModal={closeModal} />}
    </div>
  );
}
