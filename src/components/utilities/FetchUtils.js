import { useState, useEffect } from 'react';

export const fetchURL = (url, data = null) => {
  return fetch(url, data).then(r => r.json());
};

export const useGetApiData = (url, defaultValue = '') => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    fetchURL(url).then(data => setState(data));
  });

  return state;
};
