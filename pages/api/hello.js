// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'success' })
}
import axios from 'axios';

// Define base URL for the API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Create a function to get a list of users from the API
export async function getUsers() {
  const { data } = await axios.get(`${API_BASE_URL}/users`);
  return data;
}

// Create a function to update a user using the API
export async function updateUser(id, user) {
  const { data } = await axios.put(`${API_BASE_URL}/users/${id}`, user);
  return data;
}

// Create a function to delete a user using the API
export async function deleteUser(id) {
  await axios.delete(`${API_BASE_URL}/users/${id}`);
}