import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('jansahayak_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 responses globally (token expired or invalid)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('jansahayak_token');
      localStorage.removeItem('jansahayak_user');
      // Only redirect if not already on auth pages
      if (
        !window.location.pathname.includes('/login') &&
        !window.location.pathname.includes('/register')
      ) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// ─── Auth APIs ───
export const authAPI = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
  getMe: () => API.get('/auth/me'),
};

// ─── Scheme APIs ───
export const schemeAPI = {
  getAll: (params = {}) => API.get('/schemes', { params }),
  getById: (id) => API.get(`/schemes/${id}`),
  checkEligibility: (id, profile) => API.post(`/schemes/${id}/eligibility`, profile),
};

// ─── Conversation APIs ───
export const conversationAPI = {
  create: (data) => API.post('/conversations', data),
  getAll: () => API.get('/conversations'),
  getById: (id) => API.get(`/conversations/${id}`),
  sendMessage: (id, message) => API.post(`/conversations/${id}/messages`, { message }),
};

// ─── Health ───
export const healthAPI = {
  check: () => API.get('/health'),
};

export default API;
