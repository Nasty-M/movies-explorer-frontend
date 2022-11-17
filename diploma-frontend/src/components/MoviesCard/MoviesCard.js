import image from '../../images/movies/movies_001.png'

function MoviesCard(props) {
  return (
    <li className="card">
      <img src={image} alt="Обложка" className="card__image" />
      <div className="card__info">
        <div className="card__info-container">
          <h2 className="card__title">{props.elem.title}</h2>
          <button className={`card__button ${props.elem.active && 'card__button_theme'} ${props.saved && 'card__button_type_close'}`} aria-label=""></button>
        </div>
        <p className="card__duration">{props.elem.duration}</p>
        
      </div>
    </li>
  )
}

export default MoviesCard;