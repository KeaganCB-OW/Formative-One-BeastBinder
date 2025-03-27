import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";



ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const MonsterStatsBarChart = ({ monsterLeft, monsterRight }) => {

  const statsLeft = monsterLeft?.attributes || {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  };

  const statsRight = monsterRight?.attributes || {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  };

  const labels = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  const data = {
    labels,
    datasets: [
      {
        label: monsterLeft?.name || "Monster 1",
        data: [
          statsLeft.Strength,
          statsLeft.Dexterity,
          statsLeft.Constitution,
          statsLeft.Intelligence,
          statsLeft.Wisdom,
          statsLeft.Charisma,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: monsterRight?.name || "Monster 2",
        data: [
          statsRight.Strength,
          statsRight.Dexterity,
          statsRight.Constitution,
          statsRight.Intelligence,
          statsRight.Wisdom,
          statsRight.Charisma,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 30,
        ticks: {
          color: "white",
          beginAtZero: true,
          stepSize: 5

        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="monster-stats-bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default MonsterStatsBarChart;
