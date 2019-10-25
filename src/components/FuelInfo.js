import React, { useContext } from "react";
import { FuelContext } from "./FuelContext";

const FuelInfo = () => {
  const [fuelPrices] = useContext(FuelContext);
  let priceToday = "";
  console.log(fuelPrices.GraphJSON);
  return (
    <div id="fuel-prices">
      Today's <span>Unleaded 91</span> average price is {priceToday}
    </div>
  );
};

export default FuelInfo;
