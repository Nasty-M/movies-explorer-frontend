function Toggle() {
  return (
    <>
      <div class="toggle">
        <input id="toggle" class="toggle__checkbox toggle-round" type="checkbox" />
        <label for="toggle" className="toggle__label "></label>
        <label className="toggle__params">Короткометражки</label>
      </div>
    </>
  );
}

export default Toggle;