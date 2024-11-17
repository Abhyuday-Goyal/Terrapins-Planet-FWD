import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import {
  calculateCO2Efficiency,
  formatCurrency,
  formatNumberWithCommas,
} from './Utils';

const API_BASE_URL = 'http://127.0.0.1:8000';

const Marketplace = () => {
  const [listings, setListings] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [mode, setMode] = useState('SELL'); // Modes: SELL, BUY, or ACTIVITIES
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [activities, setActivities] = useState([]);

  // Fetch listings based on mode
  const fetchListings = async () => {
    try {
      const endpoint =
        mode === 'SELL'
          ? '/marketplace/sell-listings'
          : mode === 'BUY'
          ? '/marketplace/buy-listings'
          : '/activities'; // Fetch activities if mode is ACTIVITIES

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
    setMessages((prev) => [...prev, newMsg]);
    setCurrentMessage('');
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: 'Thank you for reaching out. We will get back to you shortly!',
        isUser: false,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(75%_75%_at_center,rgba(59,148,94,0.15)_0%,rgb(26,71,49)_100%)]">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <motion.h1
              className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Carbon Credit Marketplace
            </motion.h1>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-green-600 text-white"
            >
              <option value="SELL">SELL</option>
              <option value="BUY">BUY</option>
              <option value="ACTIVITIES">ACTIVITIES</option>
            </select>
          </div>
        </div>

        {/* Render listings for SELL or BUY mode */}
        {mode !== 'ACTIVITIES' && listings.length === 0 ? (
          <motion.div
            className="text-center text-white text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No listings available.
          </motion.div>
        ) : mode !== 'ACTIVITIES' ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {listings.map((listing, index) => {
              const co2eOffsets = parseFloat(
                listing.co2e_offsets.replace(' tons', '')
              );
              const credits = parseInt(listing.credits, 10);
              const percentage = Math.min(
                (credits / co2eOffsets) * 100,
                100
              ).toFixed(0);
              const excessCredits =
                credits > co2eOffsets ? credits - co2eOffsets : 0;
              const requiredCredits =
                co2eOffsets > credits ? co2eOffsets - credits : 0;

              return (
                <motion.div
                  key={listing.id}
                  className="p-4 bg-green-800 rounded-xl border border-green-700 shadow-lg backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedListing(listing);
                    setIsChatOpen(true);
                    setMessages([]);
                  }}
                >
                  <h3 className="text-2xl font-semibold text-green-300">
                    {listing.company_name}
                  </h3>
                  <p className="text-green-100 text-sm mb-2">
                    {listing.location}
                  </p>
                  <p className="text-green-100">
                    <strong>CO2e Offsets:</strong> {listing.co2e_offsets}
                  </p>
                  <p className="text-green-100">
                    <strong>Credits:</strong>{' '}
                    {formatNumberWithCommas(listing.credits)}
                  </p>
                  <p className="text-green-100">
                    <strong>Price:</strong> {listing.price}
                  </p>
                  <p className="text-green-100">
                    <strong>CO2 Efficiency:</strong>{' '}
                    {calculateCO2Efficiency(
                      listing.co2e_offsets,
                      listing.credits
                    )}{' '}
                    CO2 per credit
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden h-4">
                      <div
                        className="bg-green-500 h-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-white text-sm font-semibold">
                      {percentage}%
                    </span>
                  </div>
                  {mode === 'BUY' && excessCredits > 0 && (
                    <p className="mt-2 text-center bg-green-600 text-white p-1 rounded-md text-sm font-bold">
                      SELLING {formatNumberWithCommas(excessCredits)} credits
                    </p>
                  )}
                  {mode === 'SELL' && requiredCredits > 0 && (
                    <p className="mt-2 text-center bg-red-600 text-white p-1 rounded-md text-sm font-bold">
                      REQUIRES {formatNumberWithCommas(requiredCredits)} credits
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        ) : null}

        {/* Render activities for ACTIVITIES mode */}
        {mode === 'ACTIVITIES' && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="p-4 bg-green-800 rounded-xl border border-green-700 shadow-lg backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-green-300">
                    {activity.activity}
                  </h3>
                  <p className="text-green-100 mt-2">
                    <strong>Credits:</strong> {activity.credits}
                  </p>
                  <p className="text-green-100 mt-2 text-sm">
                    {activity.description}
                  </p>
                </div>
                <button
                  className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all font-semibold text-center"
                >
                  Claim {activity.credits} Credits
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {isChatOpen && selectedListing && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white p-8 rounded-xl shadow-2xl max-w-lg w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  Chat with {selectedListing.company_name}
                </h2>
                <X
                  className="cursor-pointer text-white hover:text-gray-300 transition-all"
                  onClick={() => setIsChatOpen(false)}
                />
              </div>
              <div className="mb-4">
                <p>
                  <strong>Location:</strong> {selectedListing.location}
                </p>
                <p>
                  <strong>CO2e Offsets:</strong>{' '}
                  {selectedListing.co2e_offsets}
                </p>
                <p>
                  <strong>Credits:</strong> {selectedListing.credits}
                </p>
                <p>
                  <strong>Price:</strong> {selectedListing.price}
                </p>
              </div>
              <div className="mb-4 max-h-64 overflow-y-auto border p-3 rounded-lg bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-2 p-2 rounded-lg ${
                      msg.isUser
                        ? 'bg-green-300 text-black text-right'
                        : 'bg-green-100 text-black'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex border-t pt-4">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-3 bg-gray-100 text-black border border-green-400 rounded-l-lg"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
