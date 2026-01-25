import axios from 'axios';

const API_BASE = '/api/skills/';

// Get all skills
export const getSkills = async () => {
  try {
    const res = await axios.get(API_BASE);
    return res.data;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};