import axios from 'axios';

const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`/api/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data: ', error);
    throw error;
  }
};

export { fetchUserData };
