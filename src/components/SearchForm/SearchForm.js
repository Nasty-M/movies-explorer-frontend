import Toggle from "../Toggle/Toggle";

function SearchForm() {
  return (
    <section className="search-form">
      <form className='search-form__content' name="search">
        <div className="search-form__block">
          <input className="search-form__input" placeholder="Фильм" name="search" type="text" required />
          <button className="search-form__button" type="submit"></button>
        </div>
        <div className="search-form__toggle">
          <Toggle />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;