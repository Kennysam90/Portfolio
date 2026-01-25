import axios from 'axios';


const API_BASE = '/api/feedback/';

export const getFeedback = async () => {
	try {
		const res = await axios.get(API_BASE);
		return res.data;
	} catch (error) {
		console.error("Error fetching feedback:", error);
		throw error;
	}
};