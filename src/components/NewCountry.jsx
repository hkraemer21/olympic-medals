import { useState } from "react";
import './NewCountry.css'
import trigger from "../assets/trigger.svg";

export default function NewCountry(props) {

    const [countryName, setCountryName] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    const [showDialog, setShowDialog] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(countryName, gold, silver, bronze);
        hideDialog();
    }

    function hideDialog() {
        setCountryName("");
        setGold(0);
        setSilver(0);
        setBronze(0);
        setShowDialog(false);
    }

    function handleKeyUp(e) {
    e.keyCode === 27 && hideDialog();
  }

return (
    <>
      {showDialog ? (
        <form onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
          <div id="overlay" onClick={hideDialog}></div>
          <div id="dialog">
            <header>
              Enter New Country
            </header>
            <div>
              <input
                id="countryName"
                type="text"
                placeholder="new country"
                maxLength="16"
                autoFocus
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                onFocus={(e) => e.target.select()}
              />
            </div>
            <div>
              <button
                disabled={countryName.trim().length === 0}
                type="submit"
                id="save"
              >
                save
              </button>
            </div>
            <div>
              <button id="cancel" type="button" onClick={hideDialog}>
                cancel
              </button>
            </div>
          </div>
        </form>
      ) : (
        <img
          src={trigger}
          alt="New Country"
          id="trigger"
          onClick={() => setShowDialog(true)}
        />
      )}
    </>
  );
}