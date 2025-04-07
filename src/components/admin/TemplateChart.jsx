import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TemplateUsagePieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchTemplateUsage = async () => {
      try {
        const res = await axios.get('templateUsage');
        const data = res.data;

        const labels = Object.keys(data);
        const values = Object.values(data);
        const bgColors = labels.map(() => getRandomColor());

        setChartData({
          labels,
          datasets: [
            {
              label: 'Templates Used',
              data: values,
              backgroundColor: bgColors,
              borderWidth: 1
            }
          ]
        });
      } catch (err) {
        console.error('Error fetching template usage:', err);
      }
    };

    fetchTemplateUsage();
  }, []);

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 15,
          font: {
            size: 14
          }
        }
      }
    }
  };

  return (
    <div
      className="w-full md:w-[500px] p-4 bg-white rounded-xl shadow-md"
      style={{ height: '400px' }}
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Template Usage</h2>
      {chartData ? (
        <div style={{ height: '300px' }}>
          <Pie data={chartData} options={chartOptions} />
        </div>
      ) : (
        <p className="text-center">Loading chart...</p>
      )}
    </div>
  );
};

export default TemplateUsagePieChart;
