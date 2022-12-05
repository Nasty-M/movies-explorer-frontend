import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import avatar from "../../images/avatar.png"
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SavedMovies(props) {

  useEffect(() => {
    props.setIsSearched(false)
  }, [])

  return (
    <div className="content">
      <Header
        loggedIn={props.loggedIn}
      >
        <div className="header__nav">
          <div className="header__nav-container">
            <Navigation />
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
      </Header>
      <main className="main">
        <SearchForm onSearchMovies={props.searchMovies} toggleShortMovie={props.toggleShortMovie} shortSaveMovie={props.shortSaveMovie} />
        <Preloader preloader={props.preloader}/>
        <MoviesCardList emptySearch={props.emptySearch} activatePreloader={props.activatePreloader} savedMovie={props.savedMovie} onSave={props.onSaveMovie} moviesList={props.isSearched ? props.cards : props.allSaveMovie} buttonElse={props.buttonElse} addCard={props.addCard} />
      </main>
      <Footer />
    </div>
    
  );
}

export default SavedMovies;