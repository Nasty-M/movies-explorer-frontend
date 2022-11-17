import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import avatar from "../../images/avatar.png"

const loggedIn = true;

function Profile() {
  return (
    <div className="profile">
      <Header
        loggedIn={loggedIn}
      >
        <Navigation />
        <div className="account">
          <img className="account__avatar" src={avatar} alt="Аватар" />
          <p className="account__name">Аккаунт</p>
        </div>
      </Header>
      <main className="main">
        <div className="profile__content">
          <div className="profile__main">
            <h2 className="profile__title">Привет, Анастасия!</h2>
            <div className="profile__info">
              <div className="profile__row">
                <p className="profile__key">Имя</p>
                <p className="profile__value">Анастасия</p>
              </div>
              <div className="profile__row">
                <p className="profile__key">E-Mail</p>
                <p className="profile__value">email@email.ru</p>
              </div>
            </div>
          </div>
          <div className="profile__buttons">
            <button className="profile__button" type="button">Редактировать</button>
            <button className="profile__button profile__button_type_red" type="button">Выйти из аккаунта</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile;