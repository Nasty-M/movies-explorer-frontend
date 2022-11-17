import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

import avatar from "../../images/avatar.png"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const loggedIn = true;
const savedFilm = false;

function Movies() {
  return (
    <div className="content">
      <Header
        loggedIn={loggedIn}
      >
        <div className="header__nav">
          <div className="header__nav-container">
            <Navigation />
            <button className="header__close" type="button"></button>
            <div className="account">
              <img className="account__avatar" src={avatar} alt="Аватар" />
              <p className="account__name">Аккаунт</p>
            </div>
          </div>
        </div>
        <a className="header__burger-link" href="#">
          <div className="header__burger">
            <span className="header__span"></span>
            <span className="header__span"></span>
            <span className="header__span"></span>
          </div>
        </a>
      </Header>
      <main className="main">
        <SearchForm />
        <Preloader />
        <MoviesCardList saved={savedFilm} />
      </main>
      <Footer />
    </div>
  )
}

export default Movies;