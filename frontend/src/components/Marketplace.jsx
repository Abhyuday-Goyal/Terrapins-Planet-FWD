import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(75%_75%_at_center,rgba(59,148,94,0.15)_0%,rgb(26,71,49)_100%)]">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-[#ffffff] text-transparent bg-clip-text">
            Carbon Credit Marketplace
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
          >
            Add Listing
          </motion.button>
        </div>

        {listings.length === 0 ? (
          <div className="text-center text-white text-lg">No listings available.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <motion.div
                key={listing.id}
                className="p-4 bg-white/10 rounded-lg border border-green-700 shadow-lg backdrop-blur-md"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-green-400">{listing.company_name}</h3>
                <p className="text-white/80 text-sm">{listing.location}</p>
                <p className="text-white mt-2">
                  <strong>CO2e Offsets:</strong> {listing.co2e_offsets}
                </p>
                <p className="text-white">
                  <strong>Credits:</strong> {listing.credits}
                </p>
                <p className="text-white">
                  <strong>Price:</strong> {listing.price}
                </p>
                <p className="text-white">
                  <strong>Products:</strong> {listing.products} ({listing.products_quantity} available)
                </p>
                <p className="text-white mt-2">{listing.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {isAddModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4 text-center">Add New Listing</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addListing();
                }}
              >
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={newListing.company_name}
                    onChange={(e) =>
                      setNewListing({ ...newListing, company_name: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CO2e Offsets"
                    value={newListing.co2e_offsets}
                    onChange={(e) =>
                      setNewListing({ ...newListing, co2e_offsets: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={newListing.location}
                    onChange={(e) =>
                      setNewListing({ ...newListing, location: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Credits"
                    value={newListing.credits}
                    onChange={(e) =>
                      setNewListing({ ...newListing, credits: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    value={newListing.price}
                    onChange={(e) =>
                      setNewListing({ ...newListing, price: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Products"
                    value={newListing.products}
                    onChange={(e) =>
                      setNewListing({ ...newListing, products: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Products Quantity"
                    value={newListing.products_quantity}
                    onChange={(e) =>
                      setNewListing({ ...newListing, products_quantity: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <textarea
                    placeholder="Description"
                    value={newListing.description}
                    onChange={(e) =>
                      setNewListing({ ...newListing, description: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
