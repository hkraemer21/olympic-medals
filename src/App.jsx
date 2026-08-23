import { useState } from "react";
import Country from './components/Country'
import './App.css'

function App() {

  const [country, setCountry] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ])

  function handleDelete(countryId) {
    console.log(`delete country: ${countryId}`);
    setCountry(country.filter((c) => c.id !== countryId));
  }

  return (
    <div className="countries">
      {country.map((country) => (
        <Country key={country.id} country={country} onDelete={handleDelete} />
      ))}
    </div>
  )
}

export default App
