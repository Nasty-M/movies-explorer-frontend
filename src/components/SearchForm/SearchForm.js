import { useState } from "react";
import { useForm } from "react-hook-form";
import Toggle from "../Toggle/Toggle";

function SearchForm(props) {

  const [searchWords, setSearchWords] = useState(props.searchWord || '');
  
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

  function onSubmit(data) {
    props.onSearchMovies(data.search);
  }

  return (
    <section className="search-form">
      <form className='search-form__content' name="search" onSubmit={handleSubmit(onSubmit)} >
        <div className="search-form__block">
          <input 
            className="search-form__input" 
            placeholder="Фильм"
            type="text"
            {...register('search', {
              required: true,
              value: searchWords,
            })}  
            aria-invalid={errors.search ? "true" : "false"}
          />
          <span className={`auth__input-error auth__input-error_visible_auth`}>
            {errors.search?.type === 'required' && 'Пожалуйста, заполните поле'}
          </span>
          <button className="search-form__button" type="submit" onClick={props.activatePreloader}></button>
        </div>
        <div className="search-form__toggle">
          <Toggle toggleShortMovie={props.toggleShortMovie} shortMovie={props.shortMovie} shortSaveMovie={props.shortSaveMovie} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;