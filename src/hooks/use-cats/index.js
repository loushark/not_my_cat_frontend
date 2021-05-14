import { useEffect, useState } from 'react';
import axios from 'axios';

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
  console.log([cats])
  return [cats];
}

export default useCats
