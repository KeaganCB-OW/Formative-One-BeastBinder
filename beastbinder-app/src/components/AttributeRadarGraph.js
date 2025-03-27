import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "./AttributeRadarGraph.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const AttributeRadarGraph = ({ monsterLeft, monsterRight }) => {
  // Placeholder attributes
  const placeholderAttributesLeft = {
    strength: 16,
    dexterity: 12,
    constitution: 14,
    intelligence: 10,
    wisdom: 13,
    charisma: 8,
  };

  const placeholderAttributesRight = {
    strength: 12,
    dexterity: 16,
    constitution: 10,
    intelligence: 15,
    wisdom: 11,
    charisma: 14,
  };

  const labels = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: monsterLeft?.name || "Monster Left",
        data: Object.values(placeholderAttributesLeft),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
      {
        label: monsterRight?.name || "Monster Right",
        data: Object.values(placeholderAttributesRight),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 20,
        ticks: { stepSize: 5 },
        pointLabels: {
          font: {
            size: 14,
            family: "Roboto",
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Roboto",
            size: 16,
          },
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="attribute-radar-graph-wrapper">
      <Radar data={data} options={options} />
    </div>
  );
};

export default AttributeRadarGraph;
