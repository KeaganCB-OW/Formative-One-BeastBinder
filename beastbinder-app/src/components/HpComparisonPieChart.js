// HpComparisonPieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const HpComparisonPieChart = ({ hpLeft, hpRight, nameLeft, nameRight }) => {
  const data = {
    labels: [nameLeft || "Left Monster", nameRight || "Right Monster"],
    datasets: [
      {
        label: "HP Comparison",
        data: [parseInt(hpLeft) || 0, parseInt(hpRight) || 0],
        backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        labels: {

          color: "white",
          font: {
            size: 16,
            family: "Roboto",
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default HpComparisonPieChart;
