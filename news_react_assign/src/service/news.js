import axios from "axios";

// Base URL for your API
const url = "http://localhost:4000/news";

// Add a new news item
export const addNews = (news) => {
  return axios.post(url, news); // Send a POST request to add news
};

// Get all news items
export const getAllNews = () => {
  return axios.get(url); // Send a GET request to fetch all news
};

// Get a specific news item by ID
export const getNewsById = (id) => {
  return axios.get(`${url}/${id}`); // Fetch a specific news item using its ID
};

// Update a news item by ID
export const updateNews = (id, updatedNews) => {
  return axios.put(`${url}/${id}`, updatedNews); // PUT request to update the news
};

// Delete a news item by ID
export const deleteNews = (id) => {
  return axios.delete(`${url}/${id}`); // DELETE request to remove a news item
};
