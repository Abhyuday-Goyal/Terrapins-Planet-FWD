import React, { useEffect, useState, useMemo } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import Sentiment from 'sentiment';
import {
  ChevronUp,
  ChevronDown,
  DollarSign,
  Users,
  TrendingUp,
  Star,
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const Analytics = () => {
  const [customerData, setCustomerData] = useState([]);
  const [metrics, setMetrics] = useState({
    totalInvestments: 0,
    creditToIncomeRatio: 0,
    avgInvestmentsPerUser: 0,
    adjustedExperienceScore: 0,
  });
  const [selectedAssets, setSelectedAssets] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/customer-data')
      .then((response) => response.json())
      .then((data) => {
        setCustomerData(data);
        calculateMetrics(data);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateSelectedAssets();
    }, 30000);

    return () => clearInterval(interval);
  }, [customerData]);

  const StatCard = ({ title, value, icon: Icon }) => (
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-green-700 shadow-lg h-full">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-green-200/70 text-base font-medium mb-3">
            {title}
          </p>
          <h3 className="text-4xl font-bold text-white mt-2">
            {typeof value === 'number'
              ? value >= 1000
                ? `${(value / 1000).toFixed(1)}k`
                : value.toFixed(1)
              : value}
          </h3>
        </div>
        <div className="p-4 bg-green-500/20 rounded-lg">
          <Icon className="w-8 h-8 text-green-300" />
        </div>
      </div>
    </div>
  );

  const calculateMetrics = (data) => {
    const totalInvestments = data.reduce(
      (sum, user) => sum + user.purchases.length + user.stocks.length,
      0,
    );
    const creditToIncomeRatio =
      data.reduce((sum, user) => {
        const ratio = (user.credit || 0) / (user.income || 1);
        return sum + ratio;
      }, 0) / data.length;

    const avgInvestmentsPerUser = totalInvestments / data.length;
    const adjustedExperienceScore =
      data.reduce((sum, user) => {
        const totalInvestments = user.purchases.length + user.stocks.length;
        return (
          sum + (totalInvestments > 5 ? user.experience * 1.2 : user.experience)
        );
      }, 0) / data.length;

    setMetrics({
      totalInvestments,
      creditToIncomeRatio,
      avgInvestmentsPerUser,
      adjustedExperienceScore,
    });
  };

  const sentiment = new Sentiment();

  const processFeedbackData = () => {
    const sentiments = {
      'Extremely Satisfied': 0,
      Satisfied: 0,
      Neutral: 0,
      'Needs Improvement': 0,
    };

    customerData.forEach((user) => {
      const score = sentiment.analyze(
        user.comments + ' ' + user.feedback,
      ).score;
      if (score > 5) {
        sentiments['Extremely Satisfied'] += 1;
      } else if (score > 0) {
        sentiments['Satisfied'] += 1;
      } else if (score === 0) {
        sentiments['Neutral'] += 1;
      } else {
        sentiments['Needs Improvement'] += 1;
      }
    });

    return sentiments;
  };

  const feedbackData = useMemo(() => {
    const sentiments = processFeedbackData();
    const colors = [
      'rgba(34, 197, 94, 0.8)',
      'rgba(21, 128, 61, 0.8)',
      'rgba(16, 185, 129, 0.8)',
      'rgba(6, 95, 70, 0.8)',
    ];
    return {
      labels: Object.keys(sentiments),
      datasets: [
        {
          data: Object.values(sentiments),
          backgroundColor: colors,
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
        },
      ],
    };
  }, [customerData]);

  const incomeBrackets = ['<$50k', '$50k-$100k', '$100k-$175k', '>$220k'];

  const assetEngagement = useMemo(() => {
    const engagement = {
      '<$50k': {},
      '$50k-$100k': {},
      '$100k-$175k': {},
      '>$220k': {},
    };

    customerData.forEach((user) => {
      const incomeBracket =
        user.income < 50000
          ? '<$50k'
          : user.income < 100000
            ? '$50k-$100k'
            : user.income < 175000
              ? '$100k-$175k'
              : '>$220k';

      [...user.purchases, ...user.stocks].forEach((asset) => {
        if (!engagement[incomeBracket][asset]) {
          engagement[incomeBracket][asset] = 0;
        }
        engagement[incomeBracket][asset] += 1;
      });
    });

    return engagement;
  }, [customerData]);

  const updateSelectedAssets = () => {
    const allAssets = Array.from(
      new Set(
        customerData.flatMap((user) => [...user.purchases, ...user.stocks]),
      ),
    );
    const shuffledAssets = allAssets.sort(() => 0.5 - Math.random());
    setSelectedAssets(shuffledAssets.slice(0, 5));
  };

  useEffect(() => {
    if (customerData.length > 0) {
      updateSelectedAssets();
    }
  }, [customerData]);

  const assetEngagementData = useMemo(() => {
    const greenShades = [
      'rgba(34, 197, 94, 0.8)',
      'rgba(21, 128, 61, 0.8)',
      'rgba(16, 185, 129, 0.8)',
      'rgba(6, 95, 70, 0.8)',
      'rgba(4, 120, 87, 0.8)',
    ];
    
    return {
      labels: incomeBrackets,
      datasets: selectedAssets.map((asset, index) => ({
        label: asset,
        data: incomeBrackets.map(
          (bracket) => assetEngagement[bracket][asset] || 0,
        ),
        backgroundColor: greenShades[index % greenShades.length],
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
      })),
    };
  }, [selectedAssets, assetEngagement]);

  if (customerData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(75%_75%_at_center,rgba(59,148,94,0.15)_0%,rgb(26,71,49)_100%)]">
        <div className="animate-pulse text-green-200">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(75%_75%_at_center,rgba(59,148,94,0.15)_0%,rgb(26,71,49)_100%)]">
      <div className="relative h-screen flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgba(34,197,94,0.15)_15%,rgba(26,71,49,0.5)_78%,transparent)]" />
        <div className="container mx-auto px-8 py-6 relative flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-400 mt-10">
                Financial Insights
              </h1>
              <p className="text-green-200/70 mt-2 text-lg">
                Real-time analytics and performance metrics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Number of Investments"
              value={metrics.totalInvestments}
              icon={DollarSign}
            />
            <StatCard
              title="Credit-to-Income Ratio"
              value={metrics.creditToIncomeRatio.toFixed(4)}
              icon={Users}
            />
            <StatCard
              title="Average Investments per User"
              value={metrics.avgInvestmentsPerUser.toFixed(2)}
              icon={TrendingUp}
            />
            <StatCard
              title="Average Experience Score"
              value={metrics.adjustedExperienceScore.toFixed(2)}
              icon={Star}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px]">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-green-700 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-green-100">
                  Customer Satisfaction
                </h2>
                <span className="text-green-400 text-sm font-medium px-3 py-1 bg-green-400/10 rounded-full">
                  {customerData.length} Users
                </span>
              </div>
              <div className="h-[300px]">
                <Doughnut
                  data={feedbackData}
                  options={{
                    maintainAspectRatio: false,
                    cutout: '65%',
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          color: 'rgb(187, 247, 208)',
                          padding: 20,
                          font: {
                            size: 12,
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-green-700 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-green-100">
                  Asset Engagement
                </h2>
                <span className="text-green-400 text-sm font-medium px-3 py-1 bg-green-400/10 rounded-full">
                  By Income Level
                </span>
              </div>
              <div className="h-[300px]">
                <Bar
                  data={assetEngagementData}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        stacked: true,
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)',
                        },
                        ticks: {
                          color: 'rgb(187, 247, 208)',
                          font: {
                            size: 11,
                          },
                        },
                      },
                      y: {
                        stacked: true,
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)',
                        },
                        ticks: {
                          color: 'rgb(187, 247, 208)',
                          font: {
                            size: 11,
                          },
                        },
                      },
                    },
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          color: 'rgb(187, 247, 208)',
                          padding: 20,
                          font: {
                            size: 12,
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;