import { useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";

function SearchForm(props) {

  useEffect(() => {
    setSearchWords(props.searchWord);
  }, [])

  const [searchWords, setSearchWords] = useState('');

  function handleChangeSearch(event) {
    setSearchWords(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearchMovies(searchWords);
  }

  return (
    <section className="search-form">
      <form className='search-form__content' name="search" onSubmit={handleSubmit} >
        <div className="search-form__block">
          <input className="search-form__input" placeholder="Фильм" name="search" type="text" required onChange={handleChangeSearch} value={searchWords} />
          <button className="search-form__button" type="submit" onClick={props.activatePreloader}></button>
        </div>
        <div className="search-form__toggle">
          <Toggle toggleShortMovie={props.toggleShortMovie} shortMovie={props.shortMovie} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;