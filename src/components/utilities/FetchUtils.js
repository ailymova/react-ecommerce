import { useState, useEffect } from 'react';

export const fetchURL = async (url, data = null) => {
  const r = await fetch(url, data);
  return await r.json();
};

export const postJson = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const useGetApiData = (url, defaultValue = '') => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    fetchURL(url).then(data => setState(() => data));
  }, [url]);

  return state;
};
