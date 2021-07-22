import { useState, useEffect } from 'react';

export const fetchURL = async (url, data = null) => {
  const r = await fetch(url, data);
  return await r.json();
};

export const useGetApiData = (url, defaultValue = '') => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    fetchURL(url).then(data => setState(() => data));
  }, [url]);

  return state;
};
