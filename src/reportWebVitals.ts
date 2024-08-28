import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Функция для обработки результатов
const reportWebVitals = (onPerfEntry?: (entry: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
