import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import { Link } from 'react-router-dom';

import avatar from "../../images/avatar.png"
import Navigation from "../Navigation/Navigation";

function Main(props) {
  return (
    <div className="content">
      <Header
        loggedIn={props.loggedIn}
      >
        {props.loggedIn ? 
          <>
          <div className={`header__nav ${props.navVisible && 'header__nav_visible'}`}>
            <div className="header__nav-container">
              <Navigation closeNavbar={props.closeNavbar} />
              <button className="header__close" type="button" onClick={props.closeNavbar}></button>
              <div className="account">
                <img className="account__avatar" src={avatar} alt="Аватар" />
                <Link className="account__name" to="/profile" onClick={props.closeNavbar}>Аккаунт</Link>
              </div>
            </div>
          </div>
          <a className="header__burger-link" href="#" onClick={props.handleNavbar}>
            <div className="header__burger">
              <span className="header__span"></span>
              <span className="header__span"></span>
              <span className="header__span"></span>
            </div>
          </a>
          </>
        :
        <>
          <div className='header__auth-nav'>
            <Link className='header__register' to='/signup'>Регистрация</Link>
            <Link className='header__login' to='/signin'>Войти</Link>
          </div>
        </>
        }
      </Header>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default Main;