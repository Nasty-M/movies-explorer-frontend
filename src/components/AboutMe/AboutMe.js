import avatar from '../../images/aboutmelogo.jpg'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me">
      <div className='about-me__content'>
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__card">
          <div className="about-me__info">
            <div className='about-me__card-info'>
              <h2 className="about-me__card-title">Анастасия</h2>
              <p className='about-me__card-subtitle'>Фронтенд-разработчик, 29 лет</p>
              <p className='about-me__card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <a href='https://github.com/Nasty-M' className='about-me__link'>Github</a>
          </div>
          <img className="about-me__photo" alt="Аватар" src={avatar} />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;