import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

function Header(props) {
  return (
    <header className='header'>
      <div className="header__content">
        <Link to="/" className="header__link"><img src={logo} alt="Лого" className="header__logo" /></Link>
        { props.children }
      </div>
    </header>
  );
}

export default Header;