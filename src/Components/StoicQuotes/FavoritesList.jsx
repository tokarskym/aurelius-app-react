import { useEffect } from 'react';

export default function FavoritesList({ favorites, removeFromFavorites }) {
  //save fav quotes in local storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <div className="favourite-quotes">
        <h2>Ulubione</h2>
        {favorites.length === 0 && <h3 className="english-quote">Brak ulubionych cytatów stoickich do wyświetlenia.</h3>}
        {favorites.map((favorite, index) => (
          <div key={index} className="favourite-quote">
            <div className="favourite-author-and-quote">
              <p className="fav-quote">{favorite.translatedQuote}</p>
              <p className="fav-author">{favorite.author}</p>
            </div>
            <button onClick={() => removeFromFavorites(index)}>-</button>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
}
