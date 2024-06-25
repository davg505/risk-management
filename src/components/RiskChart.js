import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const RiskChart = ({ risks }) => {
  // Define colors for each impact level
  const colors = {
    1: 'rgba(75, 192, 192, 0.6)',  // Light green for impact 1
    2: 'rgba(54, 162, 235, 0.6)',  // Blue for impact 2
    3: 'rgba(255, 206, 86, 0.6)',  // Yellow for impact 3
    4: 'rgba(255, 159, 64, 0.6)',  // Orange for impact 4
    5: 'rgba(255, 99, 132, 0.6)'   // Red for impact 5
  };

  const data = {
    labels: risks.map(risk => risk.riskName),
    datasets: [
      {
        label: 'Risk Impact',
        data: risks.map(risk => risk.impact),
        backgroundColor: risks.map(risk => colors[risk.impact])  // Apply the color based on impact level
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Risk Management Chart'
      },
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default RiskChart;
