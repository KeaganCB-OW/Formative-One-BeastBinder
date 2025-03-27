import axios from 'axios';

const BASE_URL = 'https://www.dnd5eapi.co/api/2014/';

export const fetchMonsters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/monsters`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching monsters:', error);
    return [];
  }
};

export const fetchMonsterDetails = async (index) => {
  try {
    const response = await axios.get(`${BASE_URL}/monsters/${index}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for monster ${index}:`, error);
    return null;
  }
};
