import { useState } from "react";

function Country() {
    const [countryName, setCountryName] = useState("United States");
    const [goldMedals, setGoldMedals] = useState(0);

  function handleClick() {
    setGoldMedals(goldMedals + 1);
  }

  return (
    <div>
      {countryName} gold medals: {goldMedals}
      <button onClick={handleClick}>+</button>
      <hr />
    </div>
  );
}

export default Country;