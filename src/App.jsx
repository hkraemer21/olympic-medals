import { useState, useRef } from "react";
import Country from './components/Country'
import NewCountry from './components/NewCountry'
import './App.css'

function App() {

  const [country, setCountry] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  const medals = useRef([
      { id: 1, name: "Gold" },
      { id: 2, name: "Silver" },
      { id: 3, name: "Bronze" },
  ]);

  function handleDelete(countryId) {
    setCountry((currentCountry) => currentCountry.filter((c) => c.id !== countryId));
  }

  function incrementMedal(countryId, medalType) {
    setCountry((currentCountry) =>
      currentCountry.map((country) =>
        country.id === countryId ? { ...country, [medalType]: country[medalType] + 1 } : country
      )
    );
  }

  function decrementMedal(countryId, medalType) {
    setCountry((currentCountry) =>
      currentCountry.map((country) => {
        if (country.id !== countryId) return country;

        const currentValue = country[medalType];
        return currentValue > 0 ? { ...country, [medalType]: currentValue - 1 } : country;
      })
    );
  }

  const totalMedals = getTotalMedals();

  function getTotalMedals() {
    return country.reduce((total, c) => total + c.gold + c.silver + c.bronze, 0);

  }

  function handleAdd(countryName, gold, silver, bronze) {
    const id = country.length > 0 ? Math.max(...country.map((country) => country.id)) + 1 : 1;
    const newCountry = { id, name: countryName, gold: gold, silver: silver, bronze: bronze };
    setCountry((currentCountry) => [...currentCountry, newCountry]);
  }

  return (
    <div>
      <h1>Olympic Medals: {totalMedals}</h1>
      <hr></hr>
      <div className="countries">
        {country.map((country) => (
          <Country key={country.id} country={country} medals={medals.current} onIncrement={incrementMedal} 
            onDecrement={decrementMedal} onDelete={handleDelete} />
        ))}
        <NewCountry onAdd={handleAdd} />
      </div>
    </div>
  )
}

export default App
