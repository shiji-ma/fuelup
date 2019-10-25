import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const FuelContext = createContext();

export const FuelProvider = props => {
  const [fuelPrices, setFuelPrices] = useState({});

  useEffect(() => {
    const getFuelPrices = () => {
      const urlPrefix = "https://cors-anywhere.herokuapp.com/";
      const urlBase = "https://www.racv.com.au/bin/racv/";
      const urlFile = "fuelprice.2.json";
      const url = urlPrefix + urlBase + urlFile;
      axios(url).then(response => setFuelPrices(response.data));
    };
    getFuelPrices();
  }, []);

  return (
    <FuelContext.Provider value={[fuelPrices, setFuelPrices]}>
      {props.children}
    </FuelContext.Provider>
  );
};
