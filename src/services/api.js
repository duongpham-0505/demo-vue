import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/users';
export default {
  getUsers: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  addUser: async (user) => {
    const response = await axios.post(API_URL, user);
    return response.data;
  },
  deleteUser: async (userId) => {
    await axios.delete(`${API_URL}/${userId}`);
  },
  updateUser: async (userId, updatedUser) => {
    console.log('user update : ',updatedUser);
    const response = await axios.put(`${API_URL}/${userId}`, updatedUser);
    return response.data;
  }
}