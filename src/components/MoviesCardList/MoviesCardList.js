import movies from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  const moviesArray = props.saved ? movies.filter(movie => movie.active === true) : movies; 

  return (
    <section className="movies" aria-label="Галерея">
      <div className="movies__content">
        <ul className="movies__list">
          {moviesArray.map((movie) => (
            <MoviesCard 
              key={movie._id} 
              elem={movie}
              saved={props.saved}
            />
          ))}
        </ul>
        <button className="movies__button" type="button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;