import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RecentCRChart = () => {
  const [recentMonsters, setRecentMonsters] = useState([]);

  useEffect(() => {
    // Fetch recent monsters from local storage
    const storedMonsters = JSON.parse(localStorage.getItem("recentMonsters")) || [];
    setRecentMonsters(storedMonsters);
  }, []);

  // Prepare data for the chart
  const data = {
    labels: recentMonsters.map((monster) => monster.name), // Monster names
    datasets: [
      {
        label: "CR Rating",
        data: recentMonsters.map((monster) => parseFloat(monster.cr) || 0), // CR ratings
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "HP",
        data: recentMonsters.map((monster) => parseFloat(monster.hp) || 0), // HP values
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      y: {
        ticks: {
          color: "white",
          font: {
            size: 14,
          },
          stepSize: 100,
          beginAtZero: true,
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RecentCRChart;