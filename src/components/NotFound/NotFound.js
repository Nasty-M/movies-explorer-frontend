import { Link, useHistory } from "react-router-dom";

function NotFound() {

  const history = useHistory();
  function redirectToPrev() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link onClick={redirectToPrev} className="not-found__link">Назад</Link>
    </section>
  );
}

export default NotFound