import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <section className="movies" aria-label="Галерея">
      <div className="movies__content">
        <p className={`movies__message ${props.emptySearch && 'movies__message_active'}`}>Ничего не найдено</p>
        <ul className="movies__list">
          {props.moviesList.map((movie) => (
            <MoviesCard 
              key={movie.id} 
              elem={movie}
              onSave={props.onSave}
              savedMovie={props.savedMovie}
              path={props.path}
            />
          ))}
        </ul>
        <button className={`movies__button ${props.buttonElse && (props.path === '/movies') && 'movies__button_active'}`} onClick={props.addCard} type="button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;