import React, { useState, useEffect } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const API_BASE_URL = 'http://127.0.0.1:8000';

const Modal = ({ isOpen, onClose, item, alternatives }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-green-800/90 border border-green-700 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold text-green-200 mb-4">Alternative Products</h2>
        <p className="text-green-100 mb-4">Current Product: {item}</p>
        
        {alternatives ? (
          <div className="space-y-3">
            {alternatives.map((alt, index) => (
              <div key={index} className="p-3 bg-green-700/50 rounded-lg">
                <p className="text-green-100">{alt}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-green-100">Loading alternatives...</p>
        )}
        
        <button
          className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-full 
                     text-green-100 text-sm shadow-lg border border-green-400/30
                     transition-colors duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const EmissionsAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [alternatives, setAlternatives] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/extract-data`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log('Top 5 Items with Highest Emissions:', data.top_items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleItemClick = async (item, emissions) => {
    setSelectedItem(item);
    setAlternatives(null); // Reset alternatives while loading

    try {
      const response = await fetch(`${API_BASE_URL}/query-alternative`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: item,
          emissions: emissions
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setAlternatives(result.alternatives);
      
    } catch (error) {
      console.error('Error fetching alternatives:', error);
      setAlternatives(['Error loading alternatives']);
    }
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setAlternatives(null);
  };

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

  const timelineData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Carbon Emissions (MT CO2e)',
      data: [2800, 3200, 3100, 3600, 3400, 3200, 3800, 4100, 3900, 4300],
      borderColor: 'rgba(74, 189, 126, 0.8)',
      backgroundColor: 'rgba(74, 189, 126, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: 'rgba(74, 189, 126, 0.8)',
      pointBorderColor: 'rgba(255, 255, 255, 0.5)',
      pointHoverRadius: 6,
    }],
  };

  const carbonCredits = data.total_emissions / 907;

  return (
    <div className="min-h-screen bg-[radial-gradient(75%_75%_at_center,rgba(59,148,94,0.15)_0%,rgb(26,71,49)_100%)] p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Carbon Emissions Analytics
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-green-800/50 border border-green-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-green-200 mb-4">
                Total Emissions & Credits
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-4xl font-bold text-white">
                    {data.total_emissions.toFixed(2)}
                  </p>
                  <p className="text-green-300 mt-2">Carbon Units</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">
                    {carbonCredits.toFixed(2)}
                  </p>
                  <p className="text-green-300 mt-2">Carbon Credits</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-green-800/50 border border-green-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-green-200 mb-4 text-center">
              Top Emissions Contributors
            </h2>
            <div className="grid grid-cols-2 gap-4 place-items-center">
              {data.top_items.map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <button
                    className="px-4 py-2 bg-green-600/90 hover:bg-green-500 rounded-full 
                               text-green-100 text-sm shadow-lg border border-green-400/30
                               transition-colors duration-300 w-full"
                    onClick={() => handleItemClick(item.item, item.emissions)}
                  >
                    {item.item}
                  </button>
                  <p className="text-green-100 mt-2">Emissions: {item.emissions.toFixed(2)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-green-800/50 border border-green-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-green-200 text-center">
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
                        color: 'rgb(233, 213, 255)',
                        padding: 20
                      }
                    }
                  }
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="bg-green-800/50 border border-green-700 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-green-200 text-center">
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
                        color: 'rgb(233, 213, 255)',
                        maxRotation: 45,
                        minRotation: 45
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

        <motion.div
          className="bg-green-800/50 border border-green-700 rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-green-200 text-center">
              Historical Emissions Trend
            </h2>
          </div>
          <div className="h-80">
            <Line
              data={timelineData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
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
                    labels: {
                      color: 'rgb(233, 213, 255)'
                    }
                  }
                }
              }}
            />
          </div>
        </motion.div>

        <Modal 
          isOpen={!!selectedItem} 
          onClose={handleCloseModal} 
          item={selectedItem}
          alternatives={alternatives}
        />
      </div>
    </div>
  );
};

export default EmissionsAnalytics;