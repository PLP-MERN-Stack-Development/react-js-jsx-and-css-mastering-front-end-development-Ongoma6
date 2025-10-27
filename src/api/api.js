import axios from 'axios';

     const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

     export const fetchTasks = async (page = 1, limit = 6, search = '') => {
       const response = await axios.get(`${API_URL}/tasks`, { params: { page, limit, search } });
       return response.data;
     };

     export const addTask = async (task) => {
       const response = await axios.post(`${API_URL}/tasks`, task);
       return response.data;
     };

     export const updateTask = async (id, updates) => {
       const response = await axios.put(`${API_URL}/tasks/${id}`, updates);
       return response.data;
     };

     export const deleteTask = async (id) => {
       await axios.delete(`${API_URL}/tasks/${id}`);
     };

     export const fetchUsers = async () => {
       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
       return response.data;
     };