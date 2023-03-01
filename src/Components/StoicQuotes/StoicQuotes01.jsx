import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [translatedQuote, setTranslatedQuote] = useState('');

  const getQuote = () => {
    axios
      .get('https://stoicquotesapi.com/v1/api/quotes/random')
      .then((response) => {
        setQuote(response.data.body);
        setAuthor(response.data.author);
        translateQuote(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // zrobić tutaj error modal x
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = () => {
    const isAlreadyAdded = favorites.some((favorite) => favorite.quote === quote);
    if (isAlreadyAdded) {
      alert('Already in favorites');
      return;
    }
    setFavorites([...favorites, { quote, author, translatedQuote }]);
  };

  const removeFromFavorites = (index) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
  };

  const translateQuote = (quote) => {
    const API_KEY = '3fe4c5e2-03c0-7d51-af4a-94e03810dc57:fx';
    const URL = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${quote}&target_lang=PL`;

    axios
      .get(URL)
      .then((response) => {
        setTranslatedQuote(response.data.translations[0].text);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <button onClick={getQuote}>Start</button>
        <button onClick={addToFavorites}>Plus</button>
      </div>
      <div>
        <p>{quote}</p>
        <p>{author}</p>
        <p>{translatedQuote}</p>
      </div>
      <div>
        <h2>Favorites</h2>
        {favorites.map((favorite, index) => (
          <div key={index}>
            <p>{favorite.quote}</p>
            <p>{favorite.author}</p>
            <p>{favorite.translatedQuote}</p>
            <button onClick={() => removeFromFavorites(index)}>Minus</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteGenerator;
