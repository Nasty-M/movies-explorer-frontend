import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className="navigation">
      <li className="navigation__item navigation__item_visible" onClick={props.closeNavbar}><Link to='/' className="navigation__link">Главная</Link></li>
      <li className="navigation__item active" onClick={props.closeNavbar}><Link to='/movies' className="navigation__link">Фильмы</Link></li>
      <li className="navigation__item" onClick={props.closeNavbar}><Link to='/saved-movies' className="navigation__link">Сохраненные фильмы</Link></li>
    </nav>  
  );
}

export default Navigation;