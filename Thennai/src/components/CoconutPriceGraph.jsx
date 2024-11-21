import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"; // Import required components

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

import "../components/coconutPriceGraph.css";

const CoconutPriceGraph = () => {
  const lineData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Price per Coconut (in $)",
        data: [2.5, 2.7, 3.0, 3.2, 3.1, 3.5, 3.6, 3.7, 3.9, 4.0, 3.8, 3.9],
        borderColor: "#0090E1",
        backgroundColor: "rgba(0, 144, 225, 0.2)",
        tension: 0.3,
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Export Price (in $)",
        data: [2.8, 2.9, 3.2, 3.3, 3.5, 3.7, 3.8, 4.0, 4.2, 4.1, 4.0, 4.1],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.3,
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Wholesale Price (in $)",
        data: [2.4, 2.6, 2.8, 3.0, 3.1, 3.2, 3.4, 3.5, 3.7, 3.8, 3.6, 3.7],
        borderColor: "#FFC107",
        backgroundColor: "rgba(255, 193, 7, 0.2)",
        tension: 0.3,
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const pieData = {
    labels: ["Retail", "Wholesale", "Export"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#4CAF50", "#FFC107", "#0090E1"],
        hoverOffset: 10,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "right" },
    },
  };

  return (
    <section className="coconut-price-graph">
      {/* Header Section */}
      <div className="graph-header">
        <h2>Coconut Market Trends</h2>
        <p>Explore the monthly price trends and market distribution of coconuts in 2024.</p>
      </div>

      {/* Charts Section */}
      <div className="chart-container">
        <div className="line-chart">
          <Line data={lineData} options={lineOptions} />
        </div>
        <div className="pie-chart">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </section>
  );
};

export default CoconutPriceGraph;
