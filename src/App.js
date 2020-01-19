import React, { useState, useEffect } from "react";
import "./App.css";
import fetchUrlList from "./fetchUrlList";
import Averages from "./components/Averages";

function App() {
  const [fuelType, setFuelType] = useState("unleaded-91");
  const [fuelInfo, setFuelInfo] = useState({ data: {} });

  useEffect(() => {
    setFuelInfo({ data: {} });
    let fetchUrl = fetchUrlList[fuelType];
    const getFuelData = async () => {
      const response = await fetch(fetchUrl);
      const responseJSON = await response.json();
      setFuelInfo({ data: responseJSON });
    };
    getFuelData();
  }, [fuelType]);

  const fuelTypeChange = event => {
    event.preventDefault();
    setFuelType(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <select
          className="fuel-type"
          id="fuel-type"
          value={fuelType}
          onChange={fuelTypeChange}
        >
          <option value="unleaded-91">Unleaded 91</option>
          <option value="unleaded-95">Unleaded 95</option>
          <option value="unleaded-98">Unleaded 98</option>
          <option value="diesel">Diesel</option>
          <option value="lpg">LPG</option>
        </select>
      </header>
      <section>
        <Averages fuelType={fuelType} fuelInfo={fuelInfo} />
      </section>
    </div>
  );
}

export default App;
