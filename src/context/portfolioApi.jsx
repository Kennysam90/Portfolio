import axios from 'axios';

// Base URL for your Portfolio API
const API_BASE = '/api/portfolio/';



// Get all portfolios
export const getPortfolios = async () => {
  try {
    const res = await axios.get(API_BASE);
    return res.data;
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    throw error;
  }
};