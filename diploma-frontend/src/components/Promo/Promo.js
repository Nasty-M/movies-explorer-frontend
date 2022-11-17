function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__text">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </div>
        <ul className="promo__nav">
          <li className="promo__button"><a className="promo__link" href="#">О проекте</a></li>
          <li className="promo__button"><a className="promo__link" href="#">Технологии</a></li>
          <li className="promo__button"><a className="promo__link" href="#">Студент</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Promo;