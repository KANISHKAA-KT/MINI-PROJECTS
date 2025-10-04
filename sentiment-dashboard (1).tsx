import React, { useState } from 'react';
import { Bell, Settings, BarChart3, Home, ChevronDown } from 'lucide-react';

const SentimentDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const alerts = [
    { id: 1, status: 'red', priority: 'Critical', message: 'Negative spike on Twitter - Customer service issues', time: '5 min ago' },
    { id: 2, status: 'orange', priority: 'High', message: 'Product quality concerns on Reddit - 15 mentions', time: '23 min ago' },
    { id: 3, status: 'orange', priority: 'High', message: 'Delivery delays mentioned across platforms', time: '1 hour ago' },
    { id: 4, status: 'yellow', priority: 'Medium', message: 'Pricing questions increasing on review sites', time: '2 hours ago' }
  ];

  const mentions = [
    { platform: 'Twitter', user: '@customer_jane', text: 'Worst customer service experience ever! Nobody answers the phone', sentiment: 'negative', time: '12 min ago' },
    { platform: 'Twitter', user: '@happy_buyer', text: 'Just received my order and it is perfect! Great quality', sentiment: 'positive', time: '25 min ago' },
    { platform: 'Reddit', user: 'u/techreview99', text: 'Been using their product for a month. Quality is decent but price is too high IMO', sentiment: 'negative', time: '45 min ago' },
    { platform: 'Reviews', user: 'Maria S.', text: 'Amazing product! Fast shipping and excellent packaging. Highly recommend!', sentiment: 'positive', time: '1 hour ago' },
    { platform: 'Twitter', user: '@business_pro', text: 'Really impressed with the customer support team. They resolved my issue in minutes!', sentiment: 'positive', time: '2 hours ago' },
    { platform: 'Reddit', user: 'u/daily_shopper', text: 'Product arrived damaged. Contacted support but no response yet. Frustrated.', sentiment: 'negative', time: '3 hours ago' }
  ];

  const platformData = [
    { platform: 'Twitter', percentage: 45, color: '#1DA1F2' },
    { platform: 'Reddit', percentage: 30, color: '#FF4500' },
    { platform: 'Reviews', percentage: 25, color: '#10B981' }
  ];

  const statusColors = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500'
  };

  const DashboardContent = () => (
    <div>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Overall Sentiment</h2>
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="text-4xl font-bold text-green-600 mb-2">78%</div>
            <div className="text-gray-600">Positive</div>
          </div>
          <div className="flex-1">
            <div className="text-4xl font-bold text-red-600 mb-2">22%</div>
            <div className="text-gray-600">Negative</div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Urgent Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alerts.map(alert => (
            <div key={alert.id} className="bg-white rounded-lg shadow p-4 flex items-start gap-3">
              <div className={`w-3 h-3 rounded-full ${statusColors[alert.status]} mt-1 flex-shrink-0`}></div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 mb-1">{alert.priority}</div>
                <div className="text-gray-600 text-sm mb-2">{alert.message}</div>
                <div className="text-gray-400 text-xs">{alert.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Mentions</h2>
          <div className="space-y-4">
            {mentions.map((mention, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-3 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-600">{mention.platform}</span>
                    <span className="text-xs text-gray-500">{mention.user}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${mention.sentiment === 'positive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {mention.sentiment}
                  </span>
                </div>
                <div className="text-sm text-gray-700 mb-1">{mention.text}</div>
                <div className="text-xs text-gray-400">{mention.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Sentiment by Platform</h2>
          <div className="space-y-4">
            {platformData.map(data => (
              <div key={data.platform}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{data.platform}</span>
                  <span className="text-sm font-semibold text-gray-800">{data.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-300" 
                    style={{ width: `${data.percentage}%`, backgroundColor: data.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const [expandedAlert, setExpandedAlert] = useState(null);
  const [alertFilter, setAlertFilter] = useState('all');

  const allAlerts = [
    { 
      id: 1, 
      status: 'red', 
      priority: 'Critical', 
      message: 'Negative spike on Twitter - Customer service issues', 
      time: '5 min ago',
      platform: 'Twitter',
      mentions: 47,
      details: 'Multiple customers reporting inability to reach support via phone. Average wait time increased to 45 minutes. Sentiment score dropped 23% in the last hour.',
      affectedRegions: ['North America', 'Europe'],
      suggestedAction: 'Immediately increase support staff and post update on social media'
    },
    { 
      id: 2, 
      status: 'orange', 
      priority: 'High', 
      message: 'Product quality concerns on Reddit - 15 mentions', 
      time: '23 min ago',
      platform: 'Reddit',
      mentions: 15,
      details: 'Users reporting issues with product durability after 2-3 weeks of use. Thread gaining traction with 200+ upvotes.',
      affectedRegions: ['North America'],
      suggestedAction: 'Investigate manufacturing batch and prepare response statement'
    },
    { 
      id: 3, 
      status: 'orange', 
      priority: 'High', 
      message: 'Delivery delays mentioned across platforms', 
      time: '1 hour ago',
      platform: 'Multiple',
      mentions: 32,
      details: 'Customers reporting delays of 3-5 days beyond promised delivery dates. Issue affecting multiple carriers.',
      affectedRegions: ['West Coast', 'Midwest'],
      suggestedAction: 'Contact logistics partners and send proactive notifications to affected customers'
    },
    { 
      id: 4, 
      status: 'yellow', 
      priority: 'Medium', 
      message: 'Pricing questions increasing on review sites', 
      time: '2 hours ago',
      platform: 'Reviews',
      mentions: 12,
      details: 'Customers comparing prices with competitors. Some confusion about promotional pricing ending.',
      affectedRegions: ['All Regions'],
      suggestedAction: 'Update pricing information on website and clarify promotional terms'
    },
    { 
      id: 5, 
      status: 'yellow', 
      priority: 'Medium', 
      message: 'Feature request trending on social media', 
      time: '3 hours ago',
      platform: 'Twitter',
      mentions: 28,
      details: 'Users requesting dark mode feature. Positive sentiment overall but growing expectation.',
      affectedRegions: ['Global'],
      suggestedAction: 'Add to product roadmap and engage with community about timeline'
    },
    { 
      id: 6, 
      status: 'red', 
      priority: 'Critical', 
      message: 'Security concern raised on tech forums', 
      time: '4 hours ago',
      platform: 'Reddit',
      mentions: 8,
      details: 'User reported potential data privacy issue. Thread is being monitored by tech journalists.',
      affectedRegions: ['Global'],
      suggestedAction: 'Immediate security team review and prepare official statement'
    },
    { 
      id: 7, 
      status: 'orange', 
      priority: 'High', 
      message: 'App crash reports increasing', 
      time: '5 hours ago',
      platform: 'Reviews',
      mentions: 19,
      details: 'iOS users on version 14+ reporting crashes on startup. App store rating dropping.',
      affectedRegions: ['Global'],
      suggestedAction: 'Deploy hotfix and notify users of upcoming update'
    }
  ];

  const getFilteredAlerts = () => {
    if (alertFilter === 'all') return allAlerts;
    return allAlerts.filter(alert => alert.priority.toLowerCase() === alertFilter);
  };

  const AlertsContent = () => {
    const filteredAlerts = getFilteredAlerts();
    
    return (
      <div>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Alert Filters</h2>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setAlertFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${alertFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All ({allAlerts.length})
            </button>
            <button 
              onClick={() => setAlertFilter('critical')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${alertFilter === 'critical' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Critical ({allAlerts.filter(a => a.priority === 'Critical').length})
            </button>
            <button 
              onClick={() => setAlertFilter('high')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${alertFilter === 'high' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              High ({allAlerts.filter(a => a.priority === 'High').length})
            </button>
            <button 
              onClick={() => setAlertFilter('medium')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${alertFilter === 'medium' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Medium ({allAlerts.filter(a => a.priority === 'Medium').length})
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Active Alerts</h2>
          <div className="space-y-4">
            {filteredAlerts.map(alert => (
              <div key={alert.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4 flex items-start gap-4 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setExpandedAlert(expandedAlert === alert.id ? null : alert.id)}>
                  <div className={`w-4 h-4 rounded-full ${statusColors[alert.status]} mt-1 flex-shrink-0`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold text-lg text-gray-800">{alert.priority}</div>
                        <div className="text-sm text-gray-500">{alert.platform} • {alert.mentions} mentions</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-sm mb-1">{alert.time}</div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          {expandedAlert === alert.id ? 'Collapse' : 'Expand'}
                        </button>
                      </div>
                    </div>
                    <div className="text-gray-700 mb-2">{alert.message}</div>
                  </div>
                </div>
                
                {expandedAlert === alert.id && (
                  <div className="bg-gray-50 p-4 border-t border-gray-200">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Details</h4>
                        <p className="text-gray-700">{alert.details}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Affected Regions</h4>
                        <div className="flex gap-2 flex-wrap">
                          {alert.affectedRegions.map((region, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Suggested Action</h4>
                        <p className="text-gray-700">{alert.suggestedAction}</p>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Take Action
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                          Dismiss
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                          Assign to Team
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const AnalyticsContent = () => {
    const sentimentTrendData = [
      { day: 'Mon', positive: 82, negative: 18 },
      { day: 'Tue', positive: 79, negative: 21 },
      { day: 'Wed', positive: 85, negative: 15 },
      { day: 'Thu', positive: 76, negative: 24 },
      { day: 'Fri', positive: 81, negative: 19 },
      { day: 'Sat', positive: 78, negative: 22 },
      { day: 'Sun', positive: 78, negative: 22 }
    ];

    const volumeTrendData = [
      { day: 'Mon', mentions: 156 },
      { day: 'Tue', mentions: 189 },
      { day: 'Wed', mentions: 167 },
      { day: 'Thu', mentions: 223 },
      { day: 'Fri', mentions: 198 },
      { day: 'Sat', mentions: 142 },
      { day: 'Sun', mentions: 172 }
    ];

    const platformSentiment = [
      { platform: 'Twitter', positive: 68, negative: 32 },
      { platform: 'Reddit', positive: 74, negative: 26 },
      { platform: 'Reviews', positive: 91, negative: 9 }
    ];

    const topicsData = [
      { topic: 'Customer Service', mentions: 342, sentiment: 65 },
      { topic: 'Product Quality', mentions: 289, sentiment: 82 },
      { topic: 'Delivery', mentions: 256, sentiment: 71 },
      { topic: 'Pricing', mentions: 198, sentiment: 58 },
      { topic: 'Features', mentions: 162, sentiment: 88 }
    ];

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
            <div className="text-gray-600">Total Mentions</div>
            <div className="text-sm text-green-600 mt-2">+12% vs last week</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">972</div>
            <div className="text-gray-600">Positive</div>
            <div className="text-sm text-green-600 mt-2">+5% vs last week</div>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">275</div>
            <div className="text-gray-600">Negative</div>
            <div className="text-sm text-red-600 mt-2">+8% vs last week</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Sentiment Trend (7 Days)</h3>
            <div className="h-64">
              <svg width="100%" height="100%" viewBox="0 0 400 240">
                <line x1="40" y1="200" x2="380" y2="200" stroke="#e5e7eb" strokeWidth="2"/>
                <line x1="40" y1="40" x2="40" y2="200" stroke="#e5e7eb" strokeWidth="2"/>
                
                {sentimentTrendData.map((d, i) => (
                  <g key={i}>
                    <text x={60 + i * 50} y="220" fontSize="12" fill="#6b7280" textAnchor="middle">{d.day}</text>
                  </g>
                ))}
                
                <text x="20" y="50" fontSize="12" fill="#6b7280">100</text>
                <text x="20" y="90" fontSize="12" fill="#6b7280">75</text>
                <text x="20" y="130" fontSize="12" fill="#6b7280">50</text>
                <text x="20" y="170" fontSize="12" fill="#6b7280">25</text>
                <text x="20" y="205" fontSize="12" fill="#6b7280">0</text>
                
                <polyline
                  points={sentimentTrendData.map((d, i) => `${60 + i * 50},${200 - (d.positive * 1.6)}`).join(' ')}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />
                
                <polyline
                  points={sentimentTrendData.map((d, i) => `${60 + i * 50},${200 - (d.negative * 1.6)}`).join(' ')}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                />
                
                {sentimentTrendData.map((d, i) => (
                  <g key={i}>
                    <circle cx={60 + i * 50} cy={200 - (d.positive * 1.6)} r="4" fill="#10b981"/>
                    <circle cx={60 + i * 50} cy={200 - (d.negative * 1.6)} r="4" fill="#ef4444"/>
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Positive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-600">Negative</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Overall Sentiment Distribution</h3>
            <div className="flex items-center justify-center h-64">
              <svg width="240" height="240" viewBox="0 0 240 240">
                <circle cx="120" cy="120" r="80" fill="none" stroke="#e5e7eb" strokeWidth="40"/>
                <circle 
                  cx="120" 
                  cy="120" 
                  r="80" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="40"
                  strokeDasharray="391.55 391.55"
                  strokeDashoffset="98.89"
                  transform="rotate(-90 120 120)"
                />
                <circle 
                  cx="120" 
                  cy="120" 
                  r="80" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="40"
                  strokeDasharray="391.55 391.55"
                  strokeDashoffset="305.41"
                  transform="rotate(190 120 120)"
                />
                <text x="120" y="115" fontSize="32" fontWeight="bold" fill="#10b981" textAnchor="middle">78%</text>
                <text x="120" y="140" fontSize="14" fill="#6b7280" textAnchor="middle">Positive</text>
              </svg>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Positive (78%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-600">Negative (22%)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Volume Trend</h3>
            <div className="h-64">
              <svg width="100%" height="100%" viewBox="0 0 400 240">
                <line x1="40" y1="200" x2="380" y2="200" stroke="#e5e7eb" strokeWidth="2"/>
                <line x1="40" y1="40" x2="40" y2="200" stroke="#e5e7eb" strokeWidth="2"/>
                
                {volumeTrendData.map((d, i) => (
                  <g key={i}>
                    <rect 
                      x={55 + i * 48} 
                      y={200 - (d.mentions * 0.7)} 
                      width="35" 
                      height={d.mentions * 0.7} 
                      fill="#3b82f6"
                      rx="2"
                    />
                    <text 
                      x={72 + i * 48} 
                      y={190 - (d.mentions * 0.7)} 
                      fontSize="12" 
                      fill="#1f2937" 
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      {d.mentions}
                    </text>
                    <text x={72 + i * 48} y="220" fontSize="12" fill="#6b7280" textAnchor="middle">{d.day}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Sentiment by Platform</h3>
            <div className="space-y-6 mt-6">
              {platformSentiment.map((data, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{data.platform}</span>
                    <span className="text-sm text-gray-600">{data.positive}% Positive</span>
                  </div>
                  <div className="flex h-8 rounded-lg overflow-hidden">
                    <div 
                      className="bg-green-500 flex items-center justify-center text-white text-xs font-semibold"
                      style={{ width: `${data.positive}%` }}
                    >
                      {data.positive > 15 && `${data.positive}%`}
                    </div>
                    <div 
                      className="bg-red-500 flex items-center justify-center text-white text-xs font-semibold"
                      style={{ width: `${data.negative}%` }}
                    >
                      {data.negative > 15 && `${data.negative}%`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Top Discussion Topics</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Topic</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Mentions</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Sentiment Score</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Trend</th>
                </tr>
              </thead>
              <tbody>
                {topicsData.map((topic, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-800 font-medium">{topic.topic}</td>
                    <td className="py-3 px-4 text-gray-600">{topic.mentions}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-32">
                          <div 
                            className={`h-2 rounded-full ${topic.sentiment >= 75 ? 'bg-green-500' : topic.sentiment >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${topic.sentiment}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{topic.sentiment}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-sm ${idx % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {idx % 2 === 0 ? '↑ 5%' : '↓ 3%'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const [keywords, setKeywords] = useState(['customer service', 'product quality', 'delivery', 'pricing']);
  const [newKeyword, setNewKeyword] = useState('');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [dailySummary, setDailySummary] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [alertThreshold, setAlertThreshold] = useState('high');
  const [emailFrequency, setEmailFrequency] = useState('immediate');
  const [notificationEmail, setNotificationEmail] = useState('john.doe@company.com');
  const [savedMessage, setSavedMessage] = useState('');

  const handleAddKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (keyword) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const handleSaveSettings = () => {
    setSavedMessage('Settings saved successfully!');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const SettingsContent = () => (
    <div className="space-y-6">
      {savedMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {savedMessage}
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Notification Preferences</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notification Email
            </label>
            <input
              type="email"
              value={notificationEmail}
              onChange={(e) => setNotificationEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Alert Types
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-5 h-5 text-blue-600"
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-800">Email alerts for critical issues</div>
                  <div className="text-sm text-gray-500">Get notified immediately when critical sentiment issues are detected</div>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={dailySummary}
                  onChange={(e) => setDailySummary(e.target.checked)}
                  className="w-5 h-5 text-blue-600"
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-800">Daily sentiment summary</div>
                  <div className="text-sm text-gray-500">Receive a daily digest of sentiment trends and mentions</div>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={weeklyReports}
                  onChange={(e) => setWeeklyReports(e.target.checked)}
                  className="w-5 h-5 text-blue-600"
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-800">Weekly reports</div>
                  <div className="text-sm text-gray-500">Get comprehensive weekly analytics and insights</div>
                </div>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Alert Threshold
            </label>
            <select
              value={alertThreshold}
              onChange={(e) => setAlertThreshold(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All alerts (Low, Medium, High, Critical)</option>
              <option value="medium">Medium and above</option>
              <option value="high">High and Critical only</option>
              <option value="critical">Critical only</option>
            </select>
            <p className="text-sm text-gray-500 mt-2">Choose which priority levels trigger notifications</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Frequency
            </label>
            <select
              value={emailFrequency}
              onChange={(e) => setEmailFrequency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="immediate">Immediate (as they occur)</option>
              <option value="hourly">Hourly digest</option>
              <option value="daily">Daily digest</option>
              <option value="weekly">Weekly digest</option>
            </select>
            <p className="text-sm text-gray-500 mt-2">How often you want to receive alert notifications</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Monitoring Keywords</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Add New Keyword
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddKeyword()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter keyword or phrase"
              />
              <button
                onClick={handleAddKeyword}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Add
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">Track mentions of specific keywords across all platforms</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Active Keywords ({keywords.length})
            </label>
            {keywords.length > 0 ? (
              <div className="flex gap-2 flex-wrap">
                {keywords.map((keyword, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-full"
                  >
                    <span className="text-sm font-medium">{keyword}</span>
                    <button
                      onClick={() => handleRemoveKeyword(keyword)}
                      className="hover:bg-blue-200 rounded-full p-1 transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 text-sm py-4 text-center border-2 border-dashed border-gray-200 rounded-lg">
                No keywords added yet. Add your first keyword above.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Platform Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Monitored Platforms
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-800">Twitter</span>
                </div>
                <span className="text-sm text-gray-500">562 mentions/day</span>
              </label>
              
              <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-800">Reddit</span>
                </div>
                <span className="text-sm text-gray-500">374 mentions/day</span>
              </label>
              
              <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-800">Review Sites</span>
                </div>
                <span className="text-sm text-gray-500">311 mentions/day</span>
              </label>
              
              <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-800">Facebook</span>
                </div>
                <span className="text-sm text-gray-500">Coming soon</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Account Settings</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                defaultValue="John"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              defaultValue="Acme Corporation"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Time Zone
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (London)</option>
              <option>UTC+1 (Berlin)</option>
              <option>UTC+8 (Singapore)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleSaveSettings}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Save All Settings
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
          Reset to Defaults
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard': return <DashboardContent />;
      case 'alerts': return <AlertsContent />;
      case 'analytics': return <AnalyticsContent />;
      case 'settings': return <SettingsContent />;
      default: return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-white shadow-lg flex-shrink-0 hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">SentimentGuard</h1>
        </div>
        <nav className="px-4 space-y-2">
          <button 
            onClick={() => setActiveSection('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeSection === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveSection('alerts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeSection === 'alerts' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <Bell size={20} />
            <span className="font-medium">Alerts</span>
          </button>
          <button 
            onClick={() => setActiveSection('analytics')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeSection === 'analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <BarChart3 size={20} />
            <span className="font-medium">Analytics</span>
          </button>
          <button 
            onClick={() => setActiveSection('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeSection === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </button>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 md:hidden">SentimentGuard</h1>
            <h1 className="text-2xl font-bold text-gray-800 hidden md:block">Dashboard</h1>
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <span className="font-medium text-gray-700 hidden sm:inline">John Doe</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Profile</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Account</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">Logout</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 flex justify-around">
          <button onClick={() => setActiveSection('dashboard')} className={`p-2 ${activeSection === 'dashboard' ? 'text-blue-600' : 'text-gray-600'}`}>
            <Home size={24} />
          </button>
          <button onClick={() => setActiveSection('alerts')} className={`p-2 ${activeSection === 'alerts' ? 'text-blue-600' : 'text-gray-600'}`}>
            <Bell size={24} />
          </button>
          <button onClick={() => setActiveSection('analytics')} className={`p-2 ${activeSection === 'analytics' ? 'text-blue-600' : 'text-gray-600'}`}>
            <BarChart3 size={24} />
          </button>
          <button onClick={() => setActiveSection('settings')} className={`p-2 ${activeSection === 'settings' ? 'text-blue-600' : 'text-gray-600'}`}>
            <Settings size={24} />
          </button>
        </div>

        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default SentimentDashboard;