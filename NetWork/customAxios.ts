import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    if (process.env.NEXT_PUBLIC_GITHUB_TOKEN && newConfig.headers) {
      newConfig.headers.Authorization = `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
    }

    return newConfig;
  },
  e => e
);
