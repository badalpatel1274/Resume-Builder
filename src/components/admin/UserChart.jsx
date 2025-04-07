import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const UserChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const res = await axios.get("users/weekly");
        const data = res.data;

        const labels = data.map(d => d._id); // dates
        const counts = data.map(d => d.count);

        setChartData({
          labels,
          datasets: [{
            label: "Weekly User Registrations",
            data: counts,
            borderColor: "#00bcd4",
            backgroundColor: "rgba(0, 188, 212, 0.2)",
            tension: 0.4,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#00bcd4",
            pointRadius: 5,
            fill: true,
          }]
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchUserStats();
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: { size: 14 }
        }
      },
      title: {
        display: true,
        text: 'Weekly User Stats',
        color: '#fff',
        font: { size: 20 }
      }
    },
    scales: {
      x: {
        ticks: { color: '#ccc' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: {
        ticks: { color: '#ccc' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    }
  };

  return (
    <div style={{ padding: "20px", background: "#1f1f1f", borderRadius: "12px", boxShadow: "0 0 12px rgba(0,0,0,0.3)" }}>
      <h3 style={{ color: "#fff", marginBottom: "20px" }}>📈 Users This Week</h3>
      {chartData?.labels?.length ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p style={{ color: "#ccc" }}>Loading chart...</p>
      )}
    </div>
  );
};

export default UserChart;
