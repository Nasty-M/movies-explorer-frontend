import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import { Link } from 'react-router-dom';

const loggedIn = false;

function Main() {
  return (
    <div className="content">
      <Header
        loggedIn={loggedIn}
      >
        <div className='header__auth-nav'>
          <Link className='header__register' to='/signup'>Регистрация</Link>
          <Link className='header__login' to='/signin'>Войти</Link>
        </div>
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