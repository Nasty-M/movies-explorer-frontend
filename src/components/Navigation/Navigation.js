import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <li className="navigation__item navigation__item_visible"><Link to='/' className="navigation__link">Главная</Link></li>
      <li className="navigation__item active"><Link to='/movies' className="navigation__link">Фильмы</Link></li>
      <li className="navigation__item"><Link to='/saved-movies' className="navigation__link">Сохраненные фильмы</Link></li>
    </nav>  
  );
}

export default Navigation;