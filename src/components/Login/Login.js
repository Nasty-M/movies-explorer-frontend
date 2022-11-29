import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/logo.png'
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

function Login(props) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  function onSubmit(data) {
    props.onLoginUser({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <main className='main'>
      <p className={`profile__message ${props.message && 'profile__message_active'}`}>{props.textMessage}</p>
      <section className="auth">
        <Link to="/"><img className="auth__logo" src={logo} alt="Лого"/></Link>
        <h2 className="auth__title">Рады видеть!</h2>
        <form className="auth__form" name="register" onSubmit={handleSubmit(onSubmit)}>
          <label className='auth__label'>E-mail</label>
          <label className='auth__input-block'>
            <input 
              type="text" 
              id="input-email" 
              className="auth__input"
              required
              name="email"
              {...register('email', {
                required: true,
                validate: (input) => isEmail(input),
              })}  
              aria-invalid={errors.email ? "true" : "false"}
            />
            <span className={`auth__input-error auth__input-error_visible_auth`}>
              {errors.email?.type === 'required' && 'Пожалуйста, заполните поле'}
              {errors.email?.type === 'validate' && 'Введите Email'}
            </span>
          </label>
          <label className='auth__label'>Пароль</label>
          <label className='auth__input-block'>
            <input 
              type="password" 
              id="input-pass" 
              className="auth__input" 
              required
              name="password"
              {...register('password', {
                required: true,
                minLength: 6,
                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
              })} 
            />
            <span className={`auth__input-error auth__input-error_visible_auth`}>
              {errors.password?.type === 'required' && 'Пожалуйста, заполните поле'}
              {errors.password?.type === 'minLength' && 'Пароль должен быть не менее 6 символов'}
              {errors.password?.type === 'pattern' && 'Пароль должен содержать строчные, заглавные латинские буквы и цифры'}
            </span>
          </label>
          <button type="submit" className="auth__button">Войти</button>
        </form>
        <p className='auth__note'>Ещё не зарегистрированы? <Link to='/signup' className='auth__link'>Регистрация</Link></p>
      </section>
    </main>
  )
}

export default withRouter(Login);