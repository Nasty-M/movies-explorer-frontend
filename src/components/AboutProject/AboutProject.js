function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__content">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info">
          <div className="about-project__info-card">
            <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__info-card">
            <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__duration">
          <div className="about-project__duration-cell about-project__duration-cell_theme_green">
            <p className="about-project__duration-text">1 неделя</p>
          </div>
          <div className="about-project__duration-cell about-project__duration-cell_theme_grey">
            <p className="about-project__duration-text">4 недели</p>
          </div>
          <div className="about-project__duration-cell">
            <p className="about-project__duration-text about-project__duration-text_theme_grey">Back-end</p>
          </div>
          <div className="about-project__duration-cell">
            <p className="about-project__duration-text about-project__duration-text_theme_grey">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;