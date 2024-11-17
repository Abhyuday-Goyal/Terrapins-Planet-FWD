import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  BarChart3, 
  Leaf, 
  Recycle, 
  AlertTriangle, 
  Search, 
  Filter,
  SlidersHorizontal,
  PackageSearch,
  ArrowUpRight,
  TrendingUp,
  Scale,
  Info,
  Plus,
  FileText,
  RefreshCw,
  X
} from 'lucide-react';

const API_BASE_URL = 'http://localhost:8000';

// AddItemModal Component
const AddItemModal = ({ isOpen, onClose, onSubmit, formData, setFormData }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    onSubmit();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-green-800/90 rounded-2xl border border-green-600/30 p-6 max-w-lg w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-100">Add New Item</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-green-700/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-green-300" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-green-300 text-sm">Item ID</label>
            <input
              type="text"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              className="w-full px-4 py-2 bg-green-900/50 border border-green-700/30 rounded-lg text-green-100"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-green-300 text-sm">Item Name</label>
            <input
              type="text"
              value={formData.item}
              onChange={(e) => setFormData({ ...formData, item: e.target.value })}
              className="w-full px-4 py-2 bg-green-900/50 border border-green-700/30 rounded-lg text-green-100"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-green-300 text-sm">Mass (kg)</label>
              <input
                type="number"
                value={formData.mass}
                onChange={(e) => setFormData({ ...formData, mass: Number(e.target.value) })}
                className="w-full px-4 py-2 bg-green-900/50 border border-green-700/30 rounded-lg text-green-100"
                required
                min="0"
                step="0.1"
              />
            </div>
            <div className="space-y-2">
              <label className="text-green-300 text-sm">Amount</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                className="w-full px-4 py-2 bg-green-900/50 border border-green-700/30 rounded-lg text-green-100"
                required
                min="0"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.recyclable}
                onChange={(e) => setFormData({ ...formData, recyclable: e.target.checked })}
                className="w-4 h-4 rounded border-green-700"
              />
              <label className="text-green-300 text-sm">Recyclable</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.biodegradable}
                onChange={(e) => setFormData({ ...formData, biodegradable: e.target.checked })}
                className="w-4 h-4 rounded border-green-700"
              />
              <label className="text-green-300 text-sm">Biodegradable</label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-green-300 text-sm">Emissions</label>
            <input
              type="number"
              value={formData.emissions}
              onChange={(e) => setFormData({ ...formData, emissions: Number(e.target.value) })}
              className="w-full px-4 py-2 bg-green-900/50 border border-green-700/30 rounded-lg text-green-100"
              required
              min="0"
              step="0.1"
            />
          </div>

          <div className="space-y-2">
            <label className="text-green-300 text-sm">Comments</label>
            <textarea
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              className="w-full px-4 py-2 bg-green-900/50 border border-green-700/30 rounded-lg text-green-100"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-green-700/50 text-green-100 rounded-lg border border-green-600/30"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Add Item
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSettings, setFilterSettings] = useState({
    showRecyclable: false,
    showBiodegradable: false,
    showHighEmissions: false
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [stats, setStats] = useState({
    totalItems: 0,
    totalMass: 0,
    averageEmissions: 0,
    sustainabilityScore: 0
  });
  const [newItem, setNewItem] = useState({
    id: '',
    item: '',
    mass: 0,
    recyclable: false,
    biodegradable: false,
    amount: 0,
    comments: '',
    emissions: 0
  });

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const fetchInventoryData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/inventory`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch inventory');
      }
  
      const inventoryData = result.data || [];
      setInventoryData(inventoryData);
      calculateStats(inventoryData);
    } catch (error) {
      console.error('Error fetching inventory:', error);
      setInventoryData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async () => {
    try {
      console.log('Submitting new item:', newItem);
      const response = await fetch(`${API_BASE_URL}/inventory/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to add item');
      }

      await fetchInventoryData();
      setIsAddModalOpen(false);
      setNewItem({
        id: '',
        item: '',
        mass: 0,
        recyclable: false,
        biodegradable: false,
        amount: 0,
        comments: '',
        emissions: 0
      });

      alert('Item added successfully!');
      
    } catch (error) {
      console.error('Error adding item:', error);
      alert(`Failed to add item: ${error.message}`);
    }
  };

  const handleExportData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/inventory/export`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to export data');
      }

      const blob = new Blob([JSON.stringify(data.data, null, 2)], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = data.filename || 'inventory_export.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error exporting data:', error);
      alert('Failed to export data');
    }
  };

  const calculateStats = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      setStats({
        totalItems: 0,
        totalMass: 0,
        averageEmissions: 0,
        sustainabilityScore: 0
      });
      return;
    }

    try {
      const totalItems = data.length;
      const totalMass = data.reduce((sum, item) => sum + (Number(item.mass) || 0), 0);
      const averageEmissions = data.reduce((sum, item) => sum + (Number(item.emissions) || 0), 0) / totalItems;
      const recyclableCount = data.filter(item => Boolean(item.recyclable)).length;
      const biodegradableCount = data.filter(item => Boolean(item.biodegradable)).length;
      const sustainabilityScore = ((recyclableCount + biodegradableCount) / (totalItems * 2)) * 100;

      setStats({
        totalItems,
        totalMass,
        averageEmissions,
        sustainabilityScore
      });
    } catch (error) {
      console.error('Error calculating stats:', error);
      setStats({
        totalItems: 0,
        totalMass: 0,
        averageEmissions: 0,
        sustainabilityScore: 0
      });
    }
  };

  const StatCard = ({ title, value, icon: Icon, trend, color = "green" }) => (
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

  const InventoryItem = ({ item }) => (
    <motion.div
      layoutId={item.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-green-800/30 backdrop-blur-sm border border-green-600/30 rounded-xl p-6
                 hover:shadow-lg transition-all duration-200 cursor-pointer"
      onClick={() => setSelectedItem(item)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-green-100">{item.item}</h3>
          <p className="text-green-300 text-sm mt-1">ID: {item.id}</p>
        </div>
        <div className="flex gap-2">
          {item.recyclable && (
            <span className="p-1.5 bg-blue-500/20 rounded-lg">
              <Recycle size={16} className="text-blue-400" />
            </span>
          )}
          {item.biodegradable && (
            <span className="p-1.5 bg-green-500/20 rounded-lg">
              <Leaf size={16} className="text-green-400" />
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-green-300 text-sm">Mass</p>
          <p className="text-green-100 font-medium">{item.mass} kg</p>
        </div>
        <div>
          <p className="text-green-300 text-sm">Amount</p>
          <p className="text-green-100 font-medium">{item.amount}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-300 text-sm">Emissions Level</span>
          <span className={`px-2 py-1 rounded-full text-xs ${
            item.emissions > 50 ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
          }`}>
            {item.emissions.toFixed(1)} units
          </span>
        </div>
        <div className="h-2 bg-green-900 rounded-full overflow-hidden">
          <div 
            className={`h-full ${
              item.emissions > 50 ? 'bg-red-500' : 'bg-green-500'
            }`}
            style={{ width: `${Math.min(item.emissions, 100)}%` }}
          />
        </div>
      </div>

      {item.comments && (
        <p className="mt-4 text-green-300 text-sm border-t border-green-700/30 pt-4">
          {item.comments}
        </p>
      )}
    </motion.div>
  );

  const ItemModal = ({ item, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        layoutId={item.id}
        className="bg-green-800/90 rounded-2xl border border-green-600/30 p-6 max-w-lg w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-green-100">{item.item}</h2>
            <p className="text-green-300 text-sm mt-1">Detailed Information</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-green-700/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-green-300" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-green-700/30 rounded-xl p-4">
            <Scale className="w-5 h-5 text-green-400 mb-2" />
            <p className="text-green-300 text-sm">Mass</p>
            <p className="text-2xl font-bold text-green-100">{item.mass} kg</p>
          </div>
          <div className="bg-green-700/30 rounded-xl p-4">
            <Box className="w-5 h-5 text-green-400 mb-2" />
            <p className="text-green-300 text-sm">Amount</p>
            <p className="text-2xl font-bold text-green-100">{item.amount}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-green-300 text-sm mb-2">Sustainability Features</p>
            <div className="flex gap-3">
              <span className={`px-3 py-1.5 rounded-lg text-sm ${
                item.recyclable 
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
              }`}>
                <Recycle className="w-4 h-4 inline-block mr-1" />
                Recyclable
              </span>
              <span className={`px-3 py-1.5 rounded-lg text-sm ${
                item.biodegradable 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
              }`}>
                <Leaf className="w-4 h-4 inline-block mr-1" />
                Biodegradable
              </span>
            </div>
          </div>

          <div>
            <p className="text-green-300 text-sm mb-2">Emissions Impact</p>
            <div className="bg-green-700/30 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-100">{item.emissions.toFixed(1)} units</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.emissions > 50 
                    ? 'bg-red-500/20 text-red-300' 
                    : 'bg-green-500/20 text-green-300'
                }`}>
                  {item.emissions > 50 ? 'High Impact' : 'Low Impact'}
                </span>
              </div>
              <div className="h-2 bg-green-900 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    item.emissions > 50 ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(item.emissions, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {item.comments && (
            <div>
              <p className="text-green-300 text-sm mb-2">Additional Notes</p>
              <div className="bg-green-700/30 rounded-xl p-4">
                <p className="text-green-100">{item.comments}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-950">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold text-green-100">
              Inventory Management
            </h1>
            <p className="text-green-300 mt-2">
              Manage and track your sustainable inventory
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <button className="px-4 py-2 bg-green-700/50 hover:bg-green-600/50 
                           rounded-xl text-green-100 flex items-center gap-2
                           border border-green-600/30 transition-colors">
              <Filter size={20} />
              Filters
            </button>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 
                           rounded-xl text-white flex items-center gap-2
                           transition-colors">
              <PackageSearch size={20} />
              Add Item
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Items"
            value={stats.totalItems}
            icon={Box}
            trend={`${stats.totalItems > 100 ? 'High Stock' : 'Low Stock'}`}
          />
          <StatCard 
            title="Total Mass"
            value={`${stats.totalMass.toFixed(1)} kg`}
            icon={Scale}
            trend="Monthly average"
            color="blue"
          />
          <StatCard 
            title="Avg. Emissions"
            value={`${stats.averageEmissions.toFixed(1)}`}
            icon={AlertTriangle}
            trend={stats.averageEmissions > 50 ? 'High Impact' : 'Low Impact'}
            color="yellow"
          />
          <StatCard 
            title="Sustainability"
            value={`${stats.sustainabilityScore.toFixed(1)}%`}
            icon={Leaf}
            trend="Above target"
            color="emerald"
          />
        </div>

       {/* Search and Filters */}
       <div className="mb-8">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-green-800/30 border border-green-700/30 
                         rounded-xl text-green-100 placeholder-green-500
                         focus:outline-none focus:ring-2 focus:ring-green-500/50"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500" />
            </div>
            <button className="p-3 bg-green-800/30 border border-green-700/30 
                           rounded-xl text-green-500 hover:text-green-400 transition-colors">

<SlidersHorizontal size={20} />
            </button>
          </div>
          
          <div className="flex gap-3 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterSettings(prev => ({
                ...prev,
                showRecyclable: !prev.showRecyclable
              }))}
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2
                       ${filterSettings.showRecyclable 
                         ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                         : 'bg-green-800/30 text-green-400 border border-green-700/30'
                       }`}
            >
              <Recycle size={16} />
              Recyclable
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterSettings(prev => ({
                ...prev,
                showBiodegradable: !prev.showBiodegradable
              }))}
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2
                       ${filterSettings.showBiodegradable 
                         ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                         : 'bg-green-800/30 text-green-400 border border-green-700/30'
                       }`}
            >
              <Leaf size={16} />
              Biodegradable
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterSettings(prev => ({
                ...prev,
                showHighEmissions: !prev.showHighEmissions
              }))}
              className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2
                       ${filterSettings.showHighEmissions 
                         ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                         : 'bg-green-800/30 text-green-400 border border-green-700/30'
                       }`}
            >
              <AlertTriangle size={16} />
              High Emissions
            </motion.button>
          </div>
        </div>
        {/* Main Inventory Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(inventoryData) && inventoryData
              .filter(item => {
                if (!item) return false;
                const matchesSearch = item.item?.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesFilters = (
                  (!filterSettings.showRecyclable || item.recyclable) &&
                  (!filterSettings.showBiodegradable || item.biodegradable) &&
                  (!filterSettings.showHighEmissions || (item.emissions > 50))
                );
                return matchesSearch && matchesFilters;
              })
              .map(item => (
                <InventoryItem key={item.id} item={item} />
              ))
            }
          </div>
        )}

        {/* Empty State */}
        {!loading && inventoryData.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <PackageSearch size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-100 mb-2">
              No Items Found
            </h3>
            <p className="text-green-300">
              Start by adding items to your inventory
            </p>
          </motion.div>
        )}

        {/* Add New Item Button (Floating) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            console.log("Opening add item modal");
            setIsAddModalOpen(true);
          }}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-green-600 to-green-700
                   rounded-full text-white shadow-lg hover:shadow-green-900/30
                   flex items-center gap-2 transition-all duration-200"
        >
          <Plus size={24} />
        </motion.button>

        {/* Modals */}
        <AnimatePresence>
          {selectedItem && (
            <ItemModal 
              item={selectedItem} 
              onClose={() => setSelectedItem(null)} 
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isAddModalOpen && (
            <AddItemModal
              isOpen={isAddModalOpen}
              onClose={() => setIsAddModalOpen(false)}
              onSubmit={handleAddItem}
              formData={newItem}
              setFormData={setNewItem}
            />
          )}
        </AnimatePresence>

        {/* Quick Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-green-800/90 backdrop-blur-sm
                   border-t border-green-700/30 py-4 px-6"
        >
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-6">
              <div>
                <p className="text-green-300 text-sm">Total Items</p>
                <p className="text-green-100 font-bold">
                  {Array.isArray(inventoryData) ? inventoryData.length : 0}
                </p>
              </div>
              <div>
                <p className="text-green-300 text-sm">Total Mass</p>
                <p className="text-green-100 font-bold">
                  {Array.isArray(inventoryData) 
                    ? inventoryData.reduce((sum, item) => sum + (Number(item.mass) || 0), 0).toFixed(1)
                    : '0'} kg
                </p>
              </div>
              <div>
                <p className="text-green-300 text-sm">Avg Emissions</p>
                <p className="text-green-100 font-bold">
                  {Array.isArray(inventoryData) && inventoryData.length > 0
                    ? (inventoryData.reduce((sum, item) => sum + (Number(item.emissions) || 0), 0) / 
                       inventoryData.length).toFixed(1)
                    : '0.0'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleExportData}
                className="px-4 py-2 bg-green-700/50 hover:bg-green-600/50 
                         rounded-lg text-green-100 flex items-center gap-2
                         border border-green-600/30 transition-colors">
                <FileText size={20} />
                Export Report
              </button>
              <button 
                onClick={fetchInventoryData}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 
                         rounded-lg text-white flex items-center gap-2
                         transition-colors">
                <RefreshCw size={20} />
                Sync Data
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;