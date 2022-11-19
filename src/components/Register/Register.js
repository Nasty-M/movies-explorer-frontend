import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

function Register() {
  return (
    <main className='main'>
      <section className="auth">
        <Link to="/"><img className="auth__logo" src={logo} alt="Лого"/></Link>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form className="auth__form" name="register">
          <label className='auth__label'>Имя</label>
          <label className='auth__input-block'>
            <input 
              type="text" 
              id="input-name" 
              className="auth__input"
              required
              name="name"
            />
            <span className="input-name-error auth__input-error"></span>
          </label>
          <label className='auth__label'>E-mail</label>
          <label className='auth__input-block'>
            <input 
              type="text" 
              id="input-email" 
              className="auth__input"
              required
              name="email"
            />
            <span className="input-email-error auth__input-error"></span>
          </label>
          <label className='auth__label'>Пароль</label>
          <label className='auth__input-block'>
            <input 
              type="text" 
              id="input-pass" 
              className="auth__input" 
              required
              name="pass"
            />
            <span className="input-pass-error auth__input-error">Что-то пошло не так...</span>
          </label>
          <button type="submit" className="auth__button">Зарегистрироваться</button>
        </form>
        <p className='auth__note'>Уже зарегистрированы? <Link to='/signin' className='auth__link'>Войти</Link></p>
      </section>
    </main>
  )
}

export default Register;