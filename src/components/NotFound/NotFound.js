import { Link, useHistory } from "react-router-dom";

function NotFound() {

  let history = useHistory();
  
  const redirectToPrev = () => {
    history.goBack();
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button onClick={() => redirectToPrev()} className="not-found__link">Назад</button>
    </section>
  );
}

export default NotFound