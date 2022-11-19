function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__info">
          <p className="footer__date">&#64; 2022</p>
          <ul className="footer__links">
            <li className="footer__item"><a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li>
            <li className="footer__item"><a className="footer__link" href="https://github.com/nasty-m">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;