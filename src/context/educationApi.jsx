import axios from 'axios';


const API_BASE = '/api/education/';

export const getEducation = async () => {
	try {
		const res = await axios.get(API_BASE);
		return res.data;
	} catch (error) {
		console.error("Error fetching education:", error);
		throw error;
	}
};