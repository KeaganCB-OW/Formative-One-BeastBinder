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
import "./SingleAttributeRadarGraph.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SingleAttributeRadarGraph = ({ monster }) => {
  const labels = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  const attributes = monster?.attributes || {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  };

  const data = {
    labels,
    datasets: [
      {
        label: monster?.name || "Selected Monster",
        data: Object.values(attributes),
        backgroundColor: "rgba(177, 93, 93, 0.2)",
        borderColor: "rgba(177, 93, 93, 1)",
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
        ticks: {
          stepSize: 5,
          color: 'white',
          backdropColor: 'transparent',
          z: 10, // doesn't do much, but included for future-proofing
          display: true
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 14
          }
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.15)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.15)',
          z: 0 // grid appears behind
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
  };
  

  return (
    <div className="single-attribute-radar-graph-wrapper">
      <Radar data={data} options={options} />
    </div>
  );
};

export default SingleAttributeRadarGraph;
