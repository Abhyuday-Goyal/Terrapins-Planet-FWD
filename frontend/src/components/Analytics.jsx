import React, { useState, useEffect } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { motion, AnimatePresence } from 'framer-motion';
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
import { 
  Leaf, 
  Recycle,
  TrendingUp,
  AlertTriangle,
  X,
  ArrowUpRight,
  RefreshCw,
  ThermometerSun,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gradient-to-br from-green-800/90 to-green-900/90 rounded-2xl border border-green-600/30 
                     shadow-2xl shadow-green-900/50 max-w-lg w-full overflow-hidden"
          >
            <div className="relative p-6 pb-3">
              <div className="absolute top-4 right-4">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-green-700/50 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-green-300 hover:text-green-100" />
                </button>
              </div>
              <h2 className="text-2xl font-bold text-green-100 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                High Emission Product
              </h2>
              <p className="text-green-300 mt-1">Analyzing alternatives for better sustainability</p>
            </div>

            <div className="px-6 py-4 bg-green-800/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-300 text-sm">Current Product</p>
                  <p className="text-xl font-semibold text-green-100 mt-1">{item}</p>
                </div>
                <div className="bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/30">
                  <p className="text-red-300 text-sm font-medium">High Impact</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-green-100 flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-green-400" />
                  Sustainable Alternatives
                </h3>
                {alternatives && (
                  <span className="text-sm text-green-300">
                    {alternatives.length} options found
                  </span>
                )}
              </div>

              <div className="space-y-3">
                {alternatives ? (
                  alternatives.map((alt, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-4 bg-green-700/30 hover:bg-green-700/40 rounded-xl 
                               border border-green-600/30 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-green-100 font-medium">{alt}</p>
                          <p className="text-green-300 text-sm mt-1">
                            Estimated reduction: 20-30%
                          </p>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ArrowUpRight className="w-5 h-5 text-green-300" />
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <span className="px-2 py-1 bg-green-600/20 rounded-full text-xs text-green-300 border border-green-600/30">
                          Lower Impact
                        </span>
                        <span className="px-2 py-1 bg-green-600/20 rounded-full text-xs text-green-300 border border-green-600/30">
                          Cost Effective
                        </span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex items-center justify-center p-8">
                    <div className="flex items-center gap-3 text-green-300">
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Finding alternatives...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 bg-green-800/30 border-t border-green-600/30">
              <button
                onClick={onClose}
                className="w-full px-4 py-3 bg-green-600 hover:bg-green-500 rounded-xl
                         text-white font-medium transition-all duration-200
                         hover:shadow-lg hover:shadow-green-900/50"
              >
                Close and Continue Analysis
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StatsCard = ({ title, value, icon: Icon, trend, color = "green" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-${color}-800/30 backdrop-blur-sm border border-${color}-600/30 
               rounded-xl p-6 hover:shadow-lg hover:shadow-${color}-900/20 
               transition-all duration-300`}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-green-300">{title}</p>
        <p className="text-3xl font-bold text-green-100 mt-2">{value}</p>
      </div>
      <div className={`p-3 bg-${color}-500/20 rounded-xl`}>
        <Icon className={`w-6 h-6 text-${color}-400`} />
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-green-400" />
        <span className="text-sm text-green-300">{trend}</span>
      </div>
    )}
  </motion.div>
);

const ChartCard = ({ title, icon: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-green-800/30 backdrop-blur-sm border border-green-600/30 rounded-xl p-6
               hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300"
  >
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-green-400" />
      <h2 className="text-xl font-bold text-green-100">{title}</h2>
    </div>
    {children}
  </motion.div>
);

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
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const handleItemClick = async (item, emissions) => {
    setSelectedItem(item);
    setAlternatives(null);

    try {
      const response = await fetch(`${API_BASE_URL}/query-alternative`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: item, emissions })
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setAlternatives(result.alternatives);
    } catch (error) {
      console.error('Error:', error);
      setAlternatives(['Error loading alternatives']);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-950">
        <div className="flex items-center gap-3 text-green-100">
          <RefreshCw className="w-6 h-6 animate-spin" />
          <span className="text-lg">Loading analysis...</span>
        </div>
      </div>
    );
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: '#fff' }
      },
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: '#fff' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#fff' }
      }
    }
  };

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
    labels: ['1970','1980', '1990', '2000', '2018', '2010', '2020'],
    datasets: [{
      label: 'Carbon Emissions (B CO2e)',
      data: [14.9, 19.49, 22.73, 25.51, 33.36, 35.14, 37.79],
      borderColor: 'rgba(74, 189, 126, 0.8)',
      backgroundColor: 'rgba(74, 189, 126, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: 'rgba(74, 189, 126, 0.8)',
      pointBorderColor: '#fff',
      pointHoverRadius: 6,
    }],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <h1 className="text-4xl font-bold text-green-100">
            Carbon Emissions Analytics
          </h1>
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-green-800/50 rounded-xl border border-green-600/30 text-green-300">
              Last updated: Today
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Emissions"
            value={`${data.total_emissions.toFixed(1)} units`}
            icon={ThermometerSun}
            trend="+2.3% from last month"
          />
          <StatsCard
            title="Carbon Credits"
            value={(data.total_emissions / 907).toFixed(1)}
            icon={Leaf}
            trend="12 credits earned this month"
            color="emerald"
          />
          <StatsCard
            title="Recyclable Items"
            value={`${data.recyclable_count}%`}
            icon={Recycle}
            trend="Improving sustainability"
            color="blue"
          />
          <StatsCard
            title="Efficiency Score"
            value="87/100"
            icon={TrendingUp}
            trend="Top 10% in industry"
            color="indigo"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard title="Emissions by Type" icon={PieChart}>
            <div className="h-64">
              <Doughnut data={pieChartData} options={chartOptions} />
            </div>
          </ChartCard>

          <ChartCard title="Top Contributors" icon={BarChart3}>
            <div className="grid grid-cols-2 gap-4">
              {data.top_items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <button
                    onClick={() => handleItemClick(item.item, item.emissions)}
                    className="w-full px-4 py-3 bg-green-600/80 hover:bg-green-500/80 
                             rounded-xl text-white font-medium transition-all duration-200
                             border border-green-500/30 hover:border-green-400/50
                             hover:shadow-lg hover:shadow-green-900/30"
                  >
                    <span className="flex items-center justify-between">
                      {item.item}
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    </span>
                  </button>
                  <div className="flex items-center justify-between px-2">
                    <span className="text-green-300 text-sm">Emissions:</span>
                    <span className="text-green-100 font-medium">
                      {item.emissions.toFixed(1)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ChartCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard title="Emissions Distribution" icon={BarChart3}>
            <div className="h-64">
              <Bar data={histogramData} options={chartOptions} />
            </div>
          </ChartCard>

          <ChartCard title="Recyclability Analysis" icon={Recycle}>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-700/30 rounded-xl p-4 border border-green-600/30">
                  <p className="text-green-300 text-sm">Biodegradable</p>
                  <p className="text-2xl font-bold text-green-100 mt-1">
                    {data.biodegradable_count}%
                  </p>
                </div>
                <div className="bg-green-700/30 rounded-xl p-4 border border-green-600/30">
                  <p className="text-green-300 text-sm">Recyclable</p>
                  <p className="text-2xl font-bold text-green-100 mt-1">
                    {data.recyclable_count}%
                  </p>
                </div>
                <div className="bg-green-700/30 rounded-xl p-4 border border-green-600/30">
                  <p className="text-green-300 text-sm">Both</p>
                  <p className="text-2xl font-bold text-green-100 mt-1">
                    {data.both_count}%
                  </p>
                </div>
              </div>
              <div className="bg-green-700/30 rounded-xl p-4 border border-green-600/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-300 text-sm">Overall Sustainability</span>
                  <span className="text-green-100 font-medium">78%</span>
                </div>
                <div className="h-2 bg-green-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-green-500 to-green-400"
                  />
                </div>
              </div>
            </div>
          </ChartCard>
        </div>

        <ChartCard title="Historical Emissions Trend" icon={LineChart}>
          <div className="h-80">
            <Line data={timelineData} options={chartOptions} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-green-700/30 rounded-xl p-4 border border-green-600/30">
              <p className="text-green-300 text-sm">Year-Over-Year</p>
              <p className="text-xl font-bold text-green-100 mt-1">+5.1%</p>
            </div>
            <div className="bg-green-700/30 rounded-xl p-4 border border-green-600/30">
              <p className="text-green-300 text-sm">Peak Value</p>
              <p className="text-xl font-bold text-green-100 mt-1">4,300</p>
            </div>
            <div className="bg-green-700/30 rounded-xl p-4 border border-green-600/30">
              <p className="text-green-300 text-sm">Average</p>
              <p className="text-xl font-bold text-green-100 mt-1">3,510</p>
            </div>
          </div>
        </ChartCard>

        <Modal 
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
          alternatives={alternatives}
        />
      </div>
    </div>
  );
};

export default EmissionsAnalytics;