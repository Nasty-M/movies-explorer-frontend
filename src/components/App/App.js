import './App.css';
import { Route, Switch, withRouter, Redirect, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import moviesApi from '../../utils/MoviesApi';
import api from '../../utils/Api';
import { COUNT_CARDS_ADD, COUNT_CARDS_ON_PAGE } from '../../utils/constants';

function App(props) {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [shortMovie, setShortMovie] = useState(false);
  const [shortSaveMovie, setShortSaveMovie] = useState(false);
  const [searchedSaveWord, setSearchedSaveWord] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [countCards, setCountCards] = useState(0);
  const [buttonElse, setButtonElse] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [countOnPage, setCountOnPage] = useState(0);
  const [countAdd, setCountAdd] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const [savedMovie, setSavedMovie] = useState([]);
  const [savedMovieAll, setSavedMovieAll] = useState([]);
  const [searchedSaveMovies, setSearchedSaveMovies] = useState([]);
  const [searchWord, setSearchWord] = useState(false);
  const [searchedMoviesList, setSearchedMoviesList] = useState([]);
  const [searchedShortMoviesList, setSearchedShortMoviesList] = useState([]);
  const [message, setMessage] = useState(false);
  const [textMessage, setTextMessage] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);
  const [emptySaveSearch, setEmptySaveSearch] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  const location = useLocation();

  function loadMovieCards() {
    if (width > 1279) {
      setCountOnPage(COUNT_CARDS_ON_PAGE.XL);
      setCountAdd(COUNT_CARDS_ADD.L);
    } else if (width > 1023 && width < 1280) {
      setCountOnPage(COUNT_CARDS_ON_PAGE.L);
      setCountAdd(COUNT_CARDS_ADD.M);
    } else if (width > 767 && width < 1024) {
      setCountOnPage(COUNT_CARDS_ON_PAGE.M);
      setCountAdd(COUNT_CARDS_ADD.S);
    } else if (width < 768) {
      setCountOnPage(COUNT_CARDS_ON_PAGE.S);
      setCountAdd(COUNT_CARDS_ADD.S);
    }
  }

  window.onresize = (() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 500)
  })

  useEffect(() => {
    loadMovieCards();
  }, [width])

  function checkedButtonElse() {
    if (countCards > 3 && countOnPage < countCards) {
      setButtonElse(true);
    } else {
      setButtonElse(false);
    }
  }

  function loadMovies() {
    const searched = JSON.parse(localStorage.getItem('searchedMoviesList'));
    const searchedWord = localStorage.getItem('searchWord');
    if (searchedWord) {
      setSearchWord(searchedWord);
    }
    
    if (searched && searched !== []) {
      setSearchMovies(searched);
    }
  }

  useEffect(() => {
    if (loggedIn) {
      loadMovies();
    }
  }, [loggedIn, searchedMoviesList, searchedShortMoviesList])
  
  useEffect(() => {
    if (loggedIn) {
      api.getUser()
      .then((data) => {
        if (data) {
          setCurrentUser(data);
          setLoggedIn(true)
        }
      })
      .catch((err) => {
        console.log(err.name);
      })
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
      .then(allMovies => {
        setAllMovies(allMovies);
      })
      .catch(err => console.log(err));
    }
  }, [loggedIn])

  function checkToken() {
    api.getUser()
    .then((data) => {
      if (data) {
        setLoggedIn(true);
        setCurrentUser(data);
        props.history.push(location.pathname);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.getItem('shortMovies')) {
        setShortMovie(JSON.parse(localStorage.getItem('shortMovies')));
      }
    }
  }, [loggedIn])
  
  

  // useEffect(() => {
  //   if (localStorage.getItem('searchWord')) {
  //     handleSearchMovies(localStorage.getItem('searchWord'));
  //   }
  // }, [shortMovie])

  function changeToggle() {
    setShortMovie(!shortMovie);
  }

  function toggleShortMovie() {
    changeToggle();
    handleSearchMovies(localStorage.getItem('searchWord'), !shortMovie);
  }

  function search(movieName, toggle) {
    if (allMovies) {
      if (toggle === true) {
        const res = allMovies.filter((movie) => {
          return movie.nameRU.toLowerCase().indexOf(movieName.toLowerCase()) !== -1 && movie.duration < 40;
        });
        if (res.length === 0) {
          setEmptySearch(true);
        }
        setSearchedShortMoviesList(res);
        localStorage.setItem('searchedMoviesList', JSON.stringify(res));
        localStorage.setItem('searchWord', movieName);
        localStorage.setItem('shortMovies', toggle)
      } else {
        const res = allMovies.filter((movie) => {
          return movie.nameRU.toLowerCase().indexOf(movieName.toLowerCase()) !== -1;
        });
        if (res.length === 0) {
          setEmptySearch(true);
        }
        setSearchedMoviesList(res);
        localStorage.setItem('searchedMoviesList', JSON.stringify(res));
        localStorage.setItem('searchWord', movieName);
        localStorage.setItem('shortMovies', toggle)
      }
    } else {
      setSearchMovies([]);
    }
  }

  function handleSearchMovies(movieName, toggle=shortMovie) {
    setSearchedMoviesList([]);
    setSearchedShortMoviesList([]);
    setEmptySearch(false);
    setPreloader(true);
    setTimeout(() => {
      search(movieName, toggle);
    }, 500);
    setTimeout(() => {
      setPreloader(false);
    }, 500)
  }

  useEffect(() => {
    if (loggedIn) {
      getSavedMovie();
    }
  }, [loggedIn])

  function getSavedMovie() {
    api.getMovies()
    .then((data) => {
      setSavedMovie(data);
      setSavedMovieAll(data);
    })
    .catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    if (loggedIn) {
      setCountCards(searchMovies.length);
    }
  }, [searchMovies])

  useEffect(() => {
    if (loggedIn) {
      checkedButtonElse();
    }
  }, [countCards])
  

  function handleLoginUser(data) {
    api.authorize(data)
    .then((res) => {
      setLoggedIn(true);
      props.history.push('/movies');
    })
    .catch((err) => {
      console.log(err);
      setMessage(true);
      setTextMessage("Неправильный логин или пароль");
    })
    .finally(() => {
      setTimeout(() => {
        setMessage(false);
        setTextMessage('')
      }, 3000)
    })
  }
  
  function handleRegisterUser(data) {
    api.register(data)
    .then((res) => {
      handleLoginUser({email: data.email, password: data.password});
      return res;
    })
    .catch((err) => {
      console.log(err);
      setMessage(true);
      setTextMessage((err === 409) ? "Пользователь с таким email уже существует" : "Попробуйте еще раз");
    })
    .finally(() => {
      setTimeout(() => {
        setMessage(false);
        setTextMessage('')
      }, 3000)
    })
  }

  function handleChangeUser(data) {
    api.editProfile(data)
    .then((res) => {
      setCurrentUser(res);
      setMessage(true);
      setTextMessage('Данные успешно обновлены!');
    })
    .catch((err) => {
      console.log(err)
      setMessage(true);
      setTextMessage('Данные не обновлены! Попробуйте еще раз.')
    })
    .finally(() => {
      setTimeout(() => {
        setMessage(false);
        setTextMessage('')
      }, 3000)
    })
  }

  function addCard() {
    if (searchMovies.length - countOnPage > countAdd) {
      setCountOnPage(countOnPage + countAdd);
    } else {
      setCountOnPage(searchMovies.length);
      setButtonElse(false);
    }
    
  }

  function handleNavbar() {
    setNavVisible(true);
  }

  function closeNavbar() {
    setNavVisible(false);
  }

  function handleMovieSave(movie) {
    const isSaved = savedMovieAll.some(i => (i.movieId === movie.movieId)) || movie.owner ;
    const mov = savedMovieAll.find((i) => i.movieId === movie.movieId) || movie;
    api.toggleSave(movie, isSaved, mov)
    .then(() => {
      api.getMovies()
      .then((data) => {
        setSavedMovie(data);
        setSavedMovieAll(data);
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err.name);
    });
  }

  function toggleSaveShortMovie() {
    setShortSaveMovie(!shortSaveMovie);
  }
  
  

  function handleSearchSavedMovies(movieName) {
    setIsSearched(true);
    setSearchedSaveWord(movieName);
    setEmptySaveSearch(false);
    setSearchedSaveMovies([]);
    setPreloader(true);
    api.getMovies()
    .then((data) => {
      if (shortSaveMovie) {
        const res = data.filter((movie) => {
          return movie.nameRU.toLowerCase().indexOf(movieName.toLowerCase()) !== -1 && movie.duration < 40;
        });
        if (res.length === 0) {
          setEmptySaveSearch(true)
        }
        setSearchedSaveMovies(res);
      } else {
        const res = data.filter((movie) => {
          return movie.nameRU.toLowerCase().indexOf(movieName.toLowerCase()) !== -1;
        });
        if (res.length === 0) {
          setEmptySaveSearch(true)
        }
        setSearchedSaveMovies(res);
      }
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setPreloader(false);
    })
  }

  useEffect(() => {
    setSavedMovie(searchedSaveMovies);
  }, [searchedSaveMovies, shortSaveMovie, savedMovie, savedMovieAll])

  useEffect(() => {
    handleSearchSavedMovies(searchedSaveWord);
  }, [shortSaveMovie])

  useEffect(() => {
    if (location.pathname !== '/saved-movie') {
      setSearchedSaveWord('');
    }
  }, [location]);

  function logout() {
    api.logout()
    .then(() => {
      localStorage.removeItem('shortMovies');
      localStorage.removeItem('searchedMoviesList');
      localStorage.removeItem('searchWord');
      setSearchMovies([]);
      setCountCards(0);
      setShortMovie(false);
      setShortSaveMovie(false);
      setSavedMovie([]);
      setSearchedShortMoviesList([]);
      setSearchedMoviesList([]);
      setLoggedIn(false);
      setSearchWord('');
      setEmptySearch(false);
      setEmptySaveSearch(false);
    })
    .catch((err) => {
      console.log(err.name);
    });
  }
  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="page">
        <Switch>
          <Main
            exact
            path="/"
            loggedIn={loggedIn}
            handleNavbar={handleNavbar}
            closeNavbar={closeNavbar}
            navVisible={navVisible}
          />
          <ProtectedRoute 
            loggedIn={loggedIn}
            component={Movies}
            path="/movies"
            cards={ searchMovies.slice(0, countOnPage) }
            searchMovies={handleSearchMovies}
            buttonElse={buttonElse}
            toggleShortMovie={toggleShortMovie}
            preloader={preloader}
            addCard={addCard}
            shortMovie={shortMovie}
            handleNavbar={handleNavbar}
            closeNavbar={closeNavbar}
            navVisible={navVisible}
            onSaveMovie={handleMovieSave}
            savedMovie={savedMovieAll}
            searchWord={searchWord}
            emptySearch={emptySearch}
          />
          <ProtectedRoute 
            loggedIn={loggedIn}
            component={SavedMovies}
            path="/saved-movies"
            toggleSaveShortMovie={toggleSaveShortMovie}
            savedMovie={savedMovie}
            cards={ savedMovie || [] }
            navVisible={navVisible}
            buttonElse={buttonElse}
            preloader={preloader}
            addCard={addCard}
            shortSaveMovie={shortSaveMovie}
            handleNavbar={handleNavbar}
            onSaveMovie={handleMovieSave}
            searchMovies={handleSearchSavedMovies}
            emptySearch={emptySaveSearch}
            setIsSearched={setIsSearched}
            isSearched={isSearched}
            allSaveMovie={savedMovieAll}
          />
          <ProtectedRoute
            loggedIn={loggedIn} 
            component={Profile}
            path="/profile"
            onChangeUser={handleChangeUser}
            logout={logout}
            handleNavbar={handleNavbar}
            closeNavbar={closeNavbar}
            navVisible={navVisible}
            textMessage={textMessage}
            message={message}
          />
          <Route path="/signin">
            {!loggedIn ? (
              <Login 
                onLoginUser={handleLoginUser} 
                textMessage={textMessage}
                message={message}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/signup">
            {!loggedIn ? (
              <Register 
                onRegisterUser={handleRegisterUser}
                textMessage={textMessage}
                message={message}
              />
            ) : (
              <Redirect to="/" />
            )}
            
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
