import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, MessageCircle, ArrowRight, Leaf, Star } from 'lucide-react';

const API_BASE_URL = 'http://127.0.0.1:8000';

const Marketplace = () => {
  const [listings, setListings] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [mode, setMode] = useState('SELL');
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchListings = async () => {
    try {
      const endpoint = mode === 'ACTIVITIES' ? '/activities' : `/marketplace/${mode.toLowerCase()}-listings`;
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!response.ok) throw new Error('Failed to fetch listings');
      const data = await response.json();
      if (mode === 'ACTIVITIES') setActivities(data);
      else setListings(data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, [mode]);

  const sendMessage = () => {
    if (currentMessage.trim() === '') return;
    const newMsg = { id: Date.now(), text: currentMessage, isUser: true };
    setMessages(prev => [...prev, newMsg]);
    setCurrentMessage('');
    
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: 'Thank you for your interest! Our team will review your message and get back to you shortly.',
        isUser: false
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getRecommendedItems = (items, type) => {
    if (type === 'ACTIVITIES') {
      // For activities, recommend based on credit value (higher credits first)
      const sortedItems = [...items].sort((a, b) => parseInt(b.credits) - parseInt(a.credits));
      return sortedItems.slice(0, 3).map(item => ({ ...item, isRecommended: true }));
    } else {
      // For buy/sell listings, recommend based on number of credits available
      const sortedItems = [...items].sort((a, b) => parseInt(b.credits) - parseInt(a.credits));
      return sortedItems.slice(0, 3).map(item => ({ ...item, isRecommended: true }));
    }
  };

  const getRemainingItems = (items, recommendedIds) => {
    return items
      .filter(item => !recommendedIds.includes(item.id))
      .map(item => ({ ...item, isRecommended: false }));
  };

  const filteredItems = mode === 'ACTIVITIES' 
    ? activities.filter(item => item.activity.toLowerCase().includes(searchTerm.toLowerCase()))
    : listings.filter(item => item.company_name.toLowerCase().includes(searchTerm.toLowerCase()));

  const recommendedItems = getRecommendedItems(filteredItems, mode);
  const recommendedIds = recommendedItems.map(item => item.id);
  const remainingItems = getRemainingItems(filteredItems, recommendedIds);

  const ListingCard = ({ item, index, isRecommended }) => {
    if (mode === 'ACTIVITIES') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`bg-green-800/50 backdrop-blur-sm rounded-xl border ${
            isRecommended ? 'border-yellow-500/50' : 'border-green-700/50'
          } overflow-hidden hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300`}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-green-100">{item.activity}</h3>
                  {isRecommended && (
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-green-100 text-sm">{item.description}</p>
              <div className="flex items-center gap-2">
                <button className="flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors">
                  {item.credits} Credits
                </button>
                {isRecommended && (
                  <span className="px-3 py-2 bg-yellow-500/20 text-yellow-500 rounded-lg text-sm font-medium">
                    Top Activity
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    const co2eOffsets = parseFloat(item.co2e_offsets?.replace(' tons', '') || 0);
    const credits = parseInt(item.credits, 10);
    const percentage = Math.min((credits / co2eOffsets) * 100, 100).toFixed(0);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`bg-green-800/50 backdrop-blur-sm rounded-xl border ${
          isRecommended ? 'border-yellow-500/50' : 'border-green-700/50'
        } overflow-hidden hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300`}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-green-100">{item.company_name}</h3>
                {isRecommended && (
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                )}
              </div>
              <p className="text-green-400 text-sm flex items-center gap-1">
                <Leaf className="w-4 h-4" />
                {item.location}
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedListing(item);
                setIsChatOpen(true);
                setMessages([]);
              }}
              className="p-2 text-green-400 hover:text-green-100 hover:bg-green-700/50 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-green-400 text-sm">CO2e Offsets</p>
                <p className="text-green-100 font-medium">{item.co2e_offsets}</p>
              </div>
              <div>
                <p className="text-green-400 text-sm">Credits</p>
                <p className="text-green-100 font-medium">{item.credits}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-green-400">
                <span>Progress</span>
                <span>{percentage}%</span>
              </div>
              <div className="h-2 bg-green-950 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              {item.barter_option ? (
                <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm">
                  Barter: {item.barter_option}
                </span>
              ) : (
                <span className="px-3 py-1 bg-green-700/50 text-green-100 rounded-lg text-sm">
                  {item.price}
                </span>
              )}
              {isRecommended && (
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-lg text-sm font-medium">
                  Best Match
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-950">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-4xl font-bold text-green-100">
              Carbon Credit Exchange
            </h1>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="px-4 py-2 bg-green-800 text-green-100 rounded-lg border border-green-700 hover:bg-green-700 transition-colors"
            >
              <option value="SELL">Sell Credits</option>
              <option value="BUY">Buy Credits</option>
              <option value="ACTIVITIES">Activities</option>
            </select>
          </div>
          
          <input
            type="text"
            placeholder={`Search ${mode.toLowerCase() === 'activities' ? 'activities' : 'companies'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-green-800/50 border border-green-700 rounded-lg text-green-100 placeholder-green-400"
          />
        </div>

        {/* Recommended Section */}
        {recommendedItems.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-100 mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              {mode === 'ACTIVITIES' ? 'Featured Activities' : 'Recommended for You'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedItems.map((item, index) => (
                <ListingCard key={item.id} item={item} index={index} isRecommended={true} />
              ))}
            </div>
          </div>
        )}

        {/* All Listings Section */}
        {remainingItems.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-green-100 mb-6">
              {mode === 'ACTIVITIES' ? 'All Activities' : 'All Listings'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingItems.map((item, index) => (
                <ListingCard key={item.id} item={item} index={index} isRecommended={false} />
              ))}
            </div>
          </div>
        )}

        {/* Chat Modal */}
        {isChatOpen && selectedListing && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-green-900 rounded-xl shadow-2xl max-w-lg w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-green-100">
                    {selectedListing.company_name}
                  </h2>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="p-2 text-green-400 hover:text-green-100 hover:bg-green-800 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="h-64 overflow-y-auto mb-4 border border-green-700/50 rounded-lg bg-green-950/50">
                  <div className="p-4 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            msg.isUser
                              ? 'bg-green-500 text-white'
                              : 'bg-green-800 text-green-100'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-green-800/50 border border-green-700 rounded-lg text-green-100 placeholder-green-400"
                  />
                  <button
                    onClick={sendMessage}
                    className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;