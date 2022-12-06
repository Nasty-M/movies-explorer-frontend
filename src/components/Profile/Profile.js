import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import avatar from "../../images/avatar.png"
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

function Profile(props) {

  const { register, formState: { errors, isValid }, handleSubmit, watch } = useForm({mode: 'onChange'});
  
  const [activeButton, setActiveButton] = useState(false);
    
  const currentUser = useContext(CurrentUserContext);

  watch((data, {name, email}) => {
    if (data.name !== currentUser.name || data.email !== currentUser.email) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
      return !isValid;
    }
  })

  function onSubmit(data) {
    if (data.name !== currentUser.name || data.email !== currentUser.email) {
      props.onChangeUser({
        name: data.name,
        email: data.email,
      })
      setActiveButton(false);
    } else {
      return !isValid
    }
  }

  return (
    <div className="profile">
      <Header
        loggedIn={props.loggedIn}
      >
        <div className={`header__nav ${props.navVisible && 'header__nav_visible'}`}>
          <div className="header__nav-container">
            <Navigation closeNavbar={props.closeNavbar}/>
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
        <p className={`profile__message ${props.message && 'profile__message_active'}`}>{props.textMessage}</p>
        <form className="profile__content" onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__main">
            <h2 className="profile__title">Привет, {currentUser.name}</h2>
            <div className="profile__info">
              <div className="profile__row">
                <label className="profile__key">Имя</label>
                <input 
                  name='name'
                  className="profile__value" 
                  {...register('name', {
                    value: currentUser.name,
                    minLength: 2,
                    maxLength: 30,
                    pattern: /[а-яa-z]/i,
                    required: true,
                    deps: currentUser.name,
                  })}
                />
                <span className={`auth__input-error auth__input-error_visible`}>
                  {errors.name?.type === 'minLength' && 'Имя должно быть не менее 2-х символов'}
                  {errors.name?.type === 'maxLength' && 'Имя должно быть не более 30 символов'}
                  {errors.name?.type === 'pattern' && 'Поле содержит недопустимые символы'}
                  {errors.name?.type === 'required' && 'Заполните поле'}
                </span>
              </div>
              <div className="profile__row">
                <label className="profile__key">E-Mail</label>
                <input 
                  name='email'  
                  className="profile__value" 
                  {...register('email', {
                    value: currentUser.email,
                    required: true,
                    validate: (input) => isEmail(input),
                    deps: currentUser.email,
                  })}
                />
                <span className={`auth__input-error auth__input-error_visible`}>
                  {errors.email?.type === 'validate' && 'Введите Email'}
                  {errors.email?.type === 'required' && 'Заполните поле'}

                </span>
              </div>
            </div>
          </div>
          <div className="profile__buttons">
            <button disabled={!isValid} className={`profile__button ${!activeButton ? 'profile__button_disabled' : ''}`} type="submit">Редактировать</button>
            <button className="profile__button profile__button_type_red" type="button" onClick={props.logout}>Выйти из аккаунта</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Profile;