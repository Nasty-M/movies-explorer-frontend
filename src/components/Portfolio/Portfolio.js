import arrowLink from '../../images/arrow.png'

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href='https://nasty-m.github.io/russian-travel/index.html' target="_blank" rel="noreferrer">
            <div className="portfolio__link-block">
              <h3 className="portfolio__item-title">Статичный сайт</h3>
              <img className="portfolio__item-image" alt="Ссылка" src={ arrowLink } />
            </div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href='https://nasty-m.github.io/mesto/index.html' target="_blank" rel="noreferrer">
            <div className="portfolio__link-block">
              <h3 className="portfolio__item-title">Адаптивный сайт</h3>
              <img className="portfolio__item-image" alt="Ссылка" src={ arrowLink } />
            </div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href='https://nastiakor.mesto.nomoredomains.icu/' target="_blank" rel="noreferrer">
            <div className="portfolio__link-block">
              <h3 className="portfolio__item-title">Одностраничное приложение</h3>
              <img className="portfolio__item-image" alt="Ссылка" src={ arrowLink } />
            </div>
          </a>
        </li>
      </ul>
      
    </div>
    
  );
}

export default Portfolio;