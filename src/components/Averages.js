import React from "react";
import AveragesSummary from "./AveragesSummary";
import AveragesGraph from "./AveragesGraph";

const Averages = ({ fuelType, fuelInfo }) => {
  if (Object.entries(fuelInfo.data).length === 0) {
    return <p>Loading...</p>;
  }
  console.log(fuelInfo);
  const todaySummary = {
    todayRetail: fuelInfo.data.TodaysPrice.CustomRegionsAvgHighLow[0].AvgPrice,
    todayWholesale: fuelInfo.data.WholesaleTodayAveragePrice,
    todayGuidance:
      fuelInfo.data.DontBuyMoreThan.CustomRegion25PercentilePrices[0].Price
  };

  const graphData = fuelInfo.data.GraphJSON;

  return (
    <div className="averages-trends" id="averages-trends">
      <AveragesSummary todaySummary={todaySummary} />
      <AveragesGraph graphData={graphData} />
    </div>
  );
};

export default Averages;
