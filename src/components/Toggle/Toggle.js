function Toggle(props) {
  return (
    <>
      <div class="toggle">
        <input id="toggle" onChange={props.toggleShortMovie} class="toggle__checkbox toggle-round" type="checkbox" checked={props.shortMovie} />
        <label for="toggle" className="toggle__label "></label>
        <label className="toggle__params">Короткометражки</label>
      </div>
    </>
  );
}

export default Toggle;