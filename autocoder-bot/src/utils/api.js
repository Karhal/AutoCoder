const BASE_URL = 'https://api.example.com';

export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
