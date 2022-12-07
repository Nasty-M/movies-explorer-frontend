import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

import avatar from "../../images/avatar.png"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";

function Movies(props) {
  return (
    <div className="content">
      <Header
        loggedIn={props.loggedIn}
      >
        <div className={`header__nav ${props.navVisible && 'header__nav_visible'}`}>
          <div className="header__nav-container">
            <Navigation  closeNavbar={props.closeNavbar} />
            <button className="header__close" type="button" onClick={props.closeNavbar}></button>
            <div className="account">
              <img className="account__avatar" src={avatar} alt="Аватар" />
              <Link className="account__name" to="/profile" onClick={props.closeNavbar}>Аккаунт</Link>
            </div>
          </div>
        </div>
        <a className="header__burger-link" href="#"  onClick={props.handleNavbar}>
          <div className="header__burger">
            <span className="header__span"></span>
            <span className="header__span"></span>
            <span className="header__span"></span>
          </div>
        </a>
      </Header>
      <main className="main">
        <SearchForm searchWord={props.searchWord} onSearchMovies={props.searchMovies} activatePreloader={props.activatePreloader} toggleShortMovie={props.toggleShortMovie} shortMovie={props.shortMovie} />
        <Preloader preloader={props.preloader}/>
        <MoviesCardList emptySearch={props.emptySearch} path={props.path} savedMovie={props.savedMovie} onSave={props.onSaveMovie} moviesList={props.cards} buttonElse={props.buttonElse} addCard={props.addCard} />
      </main>
      <Footer />
    </div>
  )
}

export default Movies;