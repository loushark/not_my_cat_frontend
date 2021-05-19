import { useEffect, useState } from 'react';

const useCats = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const res = await fetch(`http://localhost:8082/api/cats`, {
      method: 'GET',
    });
    const json = await res.json();

    setCats(json);
    
  };

  useEffect(() => fetchCats(), []);

  return [cats];
}

export default useCats
