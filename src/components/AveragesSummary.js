import React from "react";

const AveragesSummary = ({ todaySummary }) => {
  const { todayRetail, todayWholesale, todayGuidance } = todaySummary;
  return (
    <div className="summary">
      <div className="summary-retail">
        <h5>Retail</h5>
        <h3>{todayRetail}</h3>
      </div>
      <div className="summary-wholesale">
        <h5>Wholesale</h5>
        <h3>{todayWholesale}</h3>
      </div>
      <div className="summary-guidance">
        <h5>Buy Below</h5>
        <h3>{todayGuidance}</h3>
      </div>
    </div>
  );
};

export default AveragesSummary;
