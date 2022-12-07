import { Link, NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className="navigation">
      <li className="navigation__item navigation__item_visible" onClick={props.closeNavbar}><NavLink to='/' className="navigation__link">Главная</NavLink></li>
      <li className="navigation__item" onClick={props.closeNavbar}><NavLink to='/movies' className="navigation__link">Фильмы</NavLink></li>
      <li className="navigation__item" onClick={props.closeNavbar}><NavLink to='/saved-movies' className="navigation__link">Сохраненные фильмы</NavLink></li>
    </nav>  
  );
}

export default Navigation;