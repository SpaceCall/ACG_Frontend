import axios from 'axios';
import Cookies from 'js-cookie';
import config from './config.json'

const notToken = ['/auth/sign-in','/auth/sign-up','/auth/confirm-email']
 
// Создаем инстанс axios с базовыми настройками
const api = axios.create({
  baseURL: `http://${config[0].Server}`, // Замените на ваш базовый URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Перехватчик запросов для добавления токена в заголовки
api.interceptors.request.use(config => {
    let needToken = true
    console.log(config.url)
    for(let i=0;i<notToken.length;i++){
        if (config.url.includes(notToken[i])){
            needToken=false
        }
    }
    if (needToken === true) {
        const cookie = Cookies.get('user');
        if (cookie) {
          const user = JSON.parse(cookie);
          if (user.accessToken) {
            config.headers.Authorization = `Bearer ${user.accessToken}`;
          }
        }
      }
      return config;
    }, error => {
      return console.error(error);
});

// Перехватчик ответов для обработки 401 ошибки и обновления токена
api.interceptors.response.use(response => response, async error => {
  const originalRequest = error.config;
  let needToken = true
    for(let i=0;i<notToken.length;i++){
        if (error.config.url.includes(notToken[i])){
            needToken=false
        }
    }
    if (needToken === true) {
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
            const cookie = Cookies.get('user');
            const user = JSON.parse(cookie);

            const response = await api.post('/auth/refresh-token', {
                refreshToken: user.refreshToken,
            });

            user.accessToken = response.data.accessToken;
            Cookies.set('user', JSON.stringify(user));

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
            return api(originalRequest);
            } catch (e) {
            console.error('Не удалось обновить токен', e);
            }
        }
        return console.error(error);
    }
    return error
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
    chat: async (id,text) => {
        console.log(id)
        console.log(text)
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
    // Добавьте другие методы, которые вам нужны
  };

export default apiService;
