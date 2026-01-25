import axios from 'axios';

const API_BASE = '/api/experience/';

export const getExperience = async () => {
	try {
		const res = await axios.get(API_BASE);
		return res.data;
	} catch (error) {
		console.error("Error fetching experience:", error);
		throw error;
	}
};