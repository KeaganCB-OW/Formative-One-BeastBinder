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

  const attributes = monster?.attributes || {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };

  const labels = Object.entries(attributes).map(
    ([key, value]) => `${key} (${value})`
  );
  

  const data = {
    labels,
    datasets: [
      {
        label: monster?.name || "Selected Monster",
        data: Object.values(attributes),
        backgroundColor: "rgba(177, 93, 93, 0.2)",
        borderColor: "rgba(177, 93, 93, 1)",
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5
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
          stepSize: 10,
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
    <div className="single-attribute-radar-graph-wrapper">
      <Radar data={data} options={options} />
    </div>
  );
};

export default SingleAttributeRadarGraph;
