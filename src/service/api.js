import axios from 'axios';
import Cookies from 'js-cookie';
import config from './config.json'
const notToken = ['/auth/sign-in','/auth/sign-up','/auth/confirm-email']

// Создаем инстанс axios с базовыми настройками
const api = axios.create({
  baseURL: `http://${config[0].Server}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// Перехватчик запросов для добавления токена в заголовки
api.interceptors.request.use(config => {
  let needToken = true;
  for(let i = 0; i < notToken.length; i++){
    if (config.url.includes(notToken[i])){
      needToken = false;
    }
  }
  if (needToken) {
    const cookie = Cookies.get('userToken');
    if (cookie) {
      const user = JSON.parse(cookie);
      if (user.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }
    }
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Перехватчик ответов для обработки 401 ошибки и обновления токена
api.interceptors.response.use(response => response, error => {
  const originalRequest = error.config;
  let needToken = true;

  for(let i = 0; i < notToken.length; i++){
    if (error.config.url.includes(notToken[i])){
      needToken = false;
    }
  }

  if (needToken && error.response && error.response.status === 401 && !originalRequest._retry) {
    if (isRefreshing) {
      return new Promise(function(resolve, reject) {
        failedQueue.push({resolve, reject});
      }).then(token => {
        originalRequest.headers.Authorization = 'Bearer ' + token;
        return api(originalRequest);
      }).catch(err => {
        return Promise.reject(err);
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    const token = JSON.parse(Cookies.get('userToken'));

    return new Promise(function(resolve, reject) {
      fetch(`http://${config[0].Server}/auth/refresh-access`, {
        method: 'GET',
        credentials: "include",
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed!');
        }
        return response.json();
      })
      .then(data => {
        token.accessToken = data.accessToken;
        Cookies.remove('userToken');
        Cookies.set('userToken', JSON.stringify(token));

        api.defaults.headers.common['Authorization'] = `Bearer ${token.accessToken}`;
        originalRequest.headers.Authorization = 'Bearer ' + token.accessToken;

        processQueue(null, token.accessToken);
        resolve(api(originalRequest));
      })
      .catch((err) => {
        processQueue(err, null);
        reject(err);
      })
      .then(() => {
        isRefreshing = false;
      });
    });
  }

  return Promise.reject(error);
});

const apiService = {
  login: async (data) => {
    try {
      const response = await api.post('/auth/sign-in', data);
      return response.data;
    } catch (error) {
      throw error; // Перебрасываем ошибку для дальнейшей обработки, если нужно
    }
  },
  register: async (data) => {
    try {
      const response = await api.post('/auth/sign-up', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  chat: async (id, text) => {
    try {
      const response = await api.post(id ? `/chat/${id}` : '/chat', text);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  confirmEmail: async (data) => {
    try {
      const response = await api.post('/auth/confirm-email', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  forgotPassword: async (data) => {
    try {
      const response = await api.post('/auth/forgot-password', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  resetPassword: async (data) => {
    try {
      const response = await api.post('/auth/reset-password', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getUserData: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  generateCourse: async (data) => {
    try {
      const response = await api.post(`/chat/generateCourse/${data}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAllCourse: async () => {
    try {
      const response = await api.get(`/courses/courses`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getCourdeById: async (data) => {
    try {
      const response = await api.get(`/courses/${data}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getTopicId: async (data) => {
    try {
      const response = await api.get(`/courses/topic/${data}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  dontLikePlan: async (data) => {
    try {
      const response = await api.post(`/chat/dontLikePlan/${data}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  generatePlan: async (data) => {
    try {
      const response = await api.post(`/chat/generatePlan/${data}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  test: async (data) => {
    return '12312312'
  },
  // Добавьте другие методы, которые вам нужны
};

export default apiService;
