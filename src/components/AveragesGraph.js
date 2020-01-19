import React from "react";
import { Line } from "react-chartjs-2";

const AveragesGraph = ({ graphData }) => {
  const { x1: days, month, retail, wholesale } = graphData;
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  const date = days.map((day, index) => monthNames[month[index]] + " " + day);
  const fuelData = {
    labels: date,
    datasets: [
      {
        label: "Retail",
        data: retail,
        fill: false,
        backgroundColor: "#ff9933",
        boarderColor: "#ff9933"
      },
      {
        label: "Wholesale",
        data: wholesale,
        fill: false,
        backgroundColor: "#0099ff",
        boarderColor: "#0099ff"
      }
    ]
  };

  return (
    <div className="graph" id="graph">
      <Line data={fuelData} />
    </div>
  );
};

export default AveragesGraph;
