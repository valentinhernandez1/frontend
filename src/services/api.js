import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);

export const getPosts = () => axios.get(`${API_URL}/posts`);
export const createPost = (post) => axios.post(`${API_URL}/posts`, post);

export const getComments = (postId) => axios.get(`${API_URL}/comments/${postId}`);
export const createComment = (postId, comment) => axios.post(`${API_URL}/comments/${postId}`, comment);
