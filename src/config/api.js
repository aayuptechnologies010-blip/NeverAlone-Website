/**
 * Neuravia Centralized API Configuration & Helpers
 * Dynamically resolves API and Backend Base URLs from environment variables (.env)
 * Supports both Next.js (process.env.NEXT_PUBLIC_*) and Vite (import.meta.env.VITE_*)
 */

export const getApiUrl = () => {
  if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');
  }
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL.replace(/\/+$/, '');
    }
  } catch (e) {
    // ignore
  }
  return 'https://neuravia-backend.onrender.com/api';
};

export const getBackendBaseUrl = () => {
  const apiUrl = getApiUrl();
  return apiUrl.replace(/\/api\/?$/, '');
};

export const resolveImageUrl = (imgUrl, fallback = '') => {
  if (!imgUrl) return fallback;
  if (imgUrl.startsWith('http://') || imgUrl.startsWith('https://') || imgUrl.startsWith('data:')) {
    return imgUrl;
  }
  if (imgUrl.startsWith('/uploads/')) {
    return `${getBackendBaseUrl()}${imgUrl}`;
  }
  return imgUrl;
};

export const API_BASE_URL = getApiUrl();
export const BACKEND_BASE_URL = getBackendBaseUrl();
