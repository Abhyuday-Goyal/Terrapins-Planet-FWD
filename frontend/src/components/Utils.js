export const calculateCO2Efficiency = (co2Offsets, credits) => {
    const offsets = parseFloat(co2Offsets.replace(/[^0-9.]/g, ''));
    return (offsets / credits).toFixed(2);
  };
  
  export const formatCurrency = (value) => {
    return `$${value.toFixed(2)}`;
  };
  
  export const formatNumberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  export const validateListing = (listing, requiredFields) => {
    return requiredFields.every((field) => listing[field] && listing[field].toString().trim() !== '');
  };
  