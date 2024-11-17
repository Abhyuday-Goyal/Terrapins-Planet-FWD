import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// API base URL
const API_BASE_URL = 'http://127.0.0.1:8000';

const Marketplace = () => {
  const [listings, setListings] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newListing, setNewListing] = useState({
    company_name: '',
    co2e_offsets: '',
    location: '',
    credits: '',
    price: '',
    products: '',
    products_quantity: '',
    description: '',
  });

  const [selectedListing, setSelectedListing] = useState(null); // For selected listing details
  const [isChatOpen, setIsChatOpen] = useState(false); // To toggle chat modal
  const [messages, setMessages] = useState([]); // For chat messages
  const [currentMessage, setCurrentMessage] = useState(''); // Input for the chat box

  // Fetch listings from the backend
  const fetchListings = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/marketplace/listings`);
      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  // Add a new listing to the backend
  const addListing = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/marketplace/listings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newListing),
      });
      if (!response.ok) {
        throw new Error('Failed to add listing');
      }
      const addedListing = await response.json();
      setListings((prev) => [...prev, addedListing]);
      setIsAddModalOpen(false);
      setNewListing({
        company_name: '',
        co2e_offsets: '',
        location: '',
        credits: '',
        price: '',
        products: '',
        products_quantity: '',
        description: '',
      });
    } catch (error) {
      console.error('Error adding listing:', error);
    }
  };

  // Handle sending messages
  const sendMessage = () => {
    if (currentMessage.trim() === '') return; // Prevent sending empty messages

    const newMsg = {
      id: Date.now(),
      text: currentMessage,
      isUser: true,
    };
    setMessages((prevMessages) => [...prevMessages, newMsg]); // Add the new message
    setCurrentMessage(''); // Clear input
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(75%_75%_at_center,rgba(59,148,94,0.15)_0%,rgb(26,71,49)_100%)]">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Carbon Credit Marketplace
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAddModalOpen(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all"
          >
            Add Listing
          </motion.button>
        </div>

        {listings.length === 0 ? (
          <motion.div
            className="text-center text-white text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No listings available.
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {listings.map((listing, index) => (
              <motion.div
                key={listing.id}
                className="p-4 bg-green-800 rounded-xl border border-green-700 shadow-lg backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setSelectedListing(listing); // Set selected listing details
                  setIsChatOpen(true); // Open chat modal
                  setMessages([]); // Clear previous messages
                }}
              >
                <h3 className="text-2xl font-semibold text-green-300">{listing.company_name}</h3>
                <p className="text-green-100 text-sm mb-2">{listing.location}</p>
                <p className="text-green-100">
                  <strong>CO2e Offsets:</strong> {listing.co2e_offsets}
                </p>
                <p className="text-green-100">
                  <strong>Credits:</strong> {listing.credits}
                </p>
                <p className="text-green-100">
                  <strong>Price:</strong> {listing.price}
                </p>
                <p className="text-green-100">
                  <strong>Products:</strong> {listing.products} ({listing.products_quantity} available)
                </p>
                <p className="text-green-100 mt-2">{listing.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Chat Modal */}
        {isChatOpen && selectedListing && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white p-8 rounded-xl shadow-2xl max-w-lg w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
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
                  <strong>CO2e Offsets:</strong> {selectedListing.co2e_offsets}
                </p>
                <p>
                  <strong>Credits:</strong> {selectedListing.credits}
                </p>
                <p>
                  <strong>Price:</strong> {selectedListing.price}
                </p>
                <p>
                  <strong>Products:</strong> {selectedListing.products} (
                  {selectedListing.products_quantity} available)
                </p>
                <p className="mt-2">{selectedListing.description}</p>
              </div>
              <div className="mb-4 max-h-64 overflow-y-auto border p-3 rounded-lg bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-2 p-2 rounded-lg ${
                      msg.isUser ? 'bg-green-300 text-black text-right' : 'bg-green-100 text-black'
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
