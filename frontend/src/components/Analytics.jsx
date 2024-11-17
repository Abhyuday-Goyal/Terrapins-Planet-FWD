import React, { useState, useEffect } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const API_BASE_URL = 'http://127.0.0.1:8000';

const EmissionsAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/extract-data`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(75%_75%_at_center,rgba(59,148,94,0.15)_0%,rgb(26,71,49)_100%)]">
        <div className="animate-pulse text-green-200">Loading...</div>
      </div>
    );
  }

  const pieChartData = {
    labels: ['Biodegradable', 'Recyclable', 'Both'],
    datasets: [{
      data: [data.biodegradable_count, data.recyclable_count, data.both_count],
      backgroundColor: [
        'rgba(74, 189, 126, 0.8)',
        'rgba(59, 148, 94, 0.8)',
        'rgba(100, 200, 140, 0.8)',
      ],
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
    }],
  };

  const histogramData = {
    labels: data.histogram.map(item => item.range),
    datasets: [{
      label: 'Number of Items',
      data: data.histogram.map(item => item.count),
      backgroundColor: 'rgba(59, 148, 94, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
    }],
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(75%_75%_at_center,rgba(59,148,94,0.15)_0%,rgb(26,71,49)_100%)] p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Carbon Emissions Analytics
        </motion.h1>

        {/* Total Emissions Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="bg-green-800/50 border border-green-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-green-200 mb-2">
                Total Emissions
              </h3>
              <p className="text-4xl font-bold text-white">
                {data.total_emissions.toFixed(2)}
              </p>
              <p className="text-green-300 mt-2">Carbon Units</p>
            </div>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart Card for Biodegradable, Recyclable, and Both */}
          <motion.div
            className="bg-green-800/50 border border-green-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-green-200">
                Emissions by Type
              </h2>
            </div>
            <div className="h-64">
              <Doughnut
                data={pieChartData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        color: 'rgb(233, 213, 255)'
                      }
                    }
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Histogram Card for Emissions Distribution */}
          <motion.div
            className="bg-green-800/50 border border-green-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-green-200">
                Emissions Distribution
              </h2>
            </div>
            <div className="h-64">
              <Bar
                data={histogramData}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                      },
                      ticks: {
                        color: 'rgb(233, 213, 255)'
                      }
                    },
                    x: {
                      grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                      },
                      ticks: {
                        color: 'rgb(233, 213, 255)'
                      }
                    }
                  },
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmissionsAnalytics;