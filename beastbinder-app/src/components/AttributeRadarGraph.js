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
  const labels = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  const leftAttributes = monsterLeft?.attributes || {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };

  const rightAttributes = monsterRight?.attributes || {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };

  const data = {
    labels,
    datasets: [
      {
        label: monsterLeft?.name || "Monster Left",
        data: Object.values(leftAttributes),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 10
      },
      {
        label: monsterRight?.name || "Monster Right",
        data: Object.values(rightAttributes),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 10
        
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 30,
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
            size: 12
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
    <div className="attribute-radar-graph-wrapper">
      <Radar data={data} options={options} />
    </div>
  );
};

export default AttributeRadarGraph;
