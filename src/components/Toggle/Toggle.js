import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Toggle(props) {
  
  let location = useLocation()

  const [toggle, setToggle] = useState(location.pathname === '/movies' && props.shortMovie)
  const [toggleSave, setToggleSave] = useState(location.pathname === '/saved-movies' && false)

  useEffect(() => {
    if (location.pathname === '/movies') {
      setToggle(props.shortMovie);
    }     
  }, [props.shortMovie])

  function toggleChange() {
    setToggleSave(!toggleSave);
    props.toggleShortMovie(!toggleSave);
  }

  return (
    <>
      <div className="toggle">
        <input id="toggle" onChange={location.pathname === '/movies' ? props.toggleShortMovie : toggleChange} className="toggle__checkbox toggle-round" type="checkbox" checked={location.pathname === '/movies' ? toggle : toggleSave} />
        <label htmlFor="toggle" className="toggle__label "></label>
        <label className="toggle__params">Короткометражки</label>
      </div>
    </>
  );
}

export default Toggle;